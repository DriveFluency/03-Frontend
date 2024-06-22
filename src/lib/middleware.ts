import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';
import jwksClient, { CertSigningKey, RsaSigningKey, SigningKey } from 'jwks-rsa';
import NodeCache from 'node-cache';

const KEYCLOAK_BASE_URL = process.env.NEXT_KEYCLOAK_BASE_URL || 'http://conducirya.com.ar:18080';
const KEYCLOAK_REALM = process.env.NEXT_KEYCLOAK_REALM || 'DriveFluency';

// Configuración del cliente JWKS
const client = jwksClient({
  jwksUri: `${KEYCLOAK_BASE_URL}/realms/${KEYCLOAK_REALM}/protocol/openid-connect/certs`,
});

// Configuración del caché con un tiempo de vida de 1 hora (3600 segundos)
const cache = new NodeCache({ stdTTL: 3600 });

// Definir una interfaz para el token decodificado
interface DecodedToken extends JwtPayload {
  email?: string;
  preferred_username?: string;
  exp: number;
}

// Función para obtener la clave de firma desde el caché o JWKS
const getKey = (header: jwt.JwtHeader): Promise<string | Buffer> => {
  const cachedKey = cache.get<string>(header.kid as string);

  if (cachedKey) {
    return Promise.resolve(cachedKey);
  }

  return new Promise((resolve, reject) => {
    client.getSigningKey(header.kid, (err, key: SigningKey | undefined) => {
      if (err) {
        return reject(err);
      }
      const signingKey = (key as CertSigningKey)?.publicKey || (key as RsaSigningKey)?.rsaPublicKey;
      cache.set(header.kid as string, signingKey);
      resolve(signingKey);
    });
  });
};

// Middleware para validar el token
export const validateToken = (handler: NextApiHandler): NextApiHandler => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ message: 'Token vacío' });
      }

      const token = authHeader.split(' ')[1];

      const decoded = await new Promise<DecodedToken | undefined>((resolve, reject) => {
        jwt.verify(token, (header, callback) => {
          getKey(header)
            .then(key => callback(null, key))
            .catch(err => callback(err));
        }, { algorithms: ['RS256'] }, (err, decoded) => {
          if (err) {
            return reject(err);
          }
          resolve(decoded as DecodedToken);
        });
      });

      if (!decoded) {
        return res.status(401).json({ message: 'Token inválido' });
      }

      // El token es válido, añadir el usuario a la solicitud
      (req as any).user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  };
};