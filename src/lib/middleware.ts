import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import jwksClient, { CertSigningKey, RsaSigningKey, SigningKey } from 'jwks-rsa';

const KEYCLOACK_BASE_URL = process.env.NEXT_KEYCLOACK_BASE_URL || 'http://conducirya.com.ar:18080';
const KEYCLOACK_REALM = process.env.NEXT_KEYCLOACK_REALM || 'DriveFluency';

// Configuración del cliente JWKS
const client = jwksClient({
    jwksUri: `https://${KEYCLOACK_BASE_URL}/auth/realms/${KEYCLOACK_REALM}/protocol/openid-connect/certs`
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
        const signingKey = (key as CertSigningKey).publicKey || (key as RsaSigningKey).rsaPublicKey;
        callback(null, signingKey);
    });
};

// Middleware para validar el token
export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // El token es válido, continuar con la solicitud
        console.log(decoded)
        req.user = decoded;
        next();
    });
};

