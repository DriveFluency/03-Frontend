import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';
import jwksClient, { CertSigningKey, RsaSigningKey, SigningKey } from 'jwks-rsa';
import https from 'https';

const KEYCLOACK_BASE_URL = process.env.NEXT_KEYCLOACK_BASE_URL || 'http://conducirya.com.ar:18080';
const KEYCLOACK_REALM = process.env.NEXT_KEYCLOACK_REALM || 'DriveFluency';


// Configuración del cliente JWKS
const client = jwksClient({
    jwksUri: `${KEYCLOACK_BASE_URL}/auth/realms/${KEYCLOACK_REALM}/protocol/openid-connect/certs`,
});


// Definir una interfaz para el token decodificado
interface DecodedToken extends JwtPayload {
    email?: string;
    preferred_username?: string;
    exp: number;
}


// Función para obtener la clave de firma
const getKey = (header: any, callback: any) => {
    client.getSigningKey(header.kid, (err, key: SigningKey | undefined) => {
        console.log(key, err)
        const signingKey = (key as CertSigningKey)?.publicKey || (key as RsaSigningKey)?.rsaPublicKey;
        callback(null, signingKey);
    });
};

export const validateToken = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send('Token vacio');
        }

        const token = authHeader.split(' ')[1];

        jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
            if (err) {
                console.log(err)
                return res.status(401).send('Token invalido');
            }

            // El token es válido, añadir el usuario a la solicitud
            (req as any).user = decoded;
            return handler(req, res);
        });
    };
};

