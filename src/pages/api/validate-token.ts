import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '../../lib/middleware';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  validateToken(req as any, res as any, () => {
    res.status(200).json({ message: 'Token is valid' });
  });
};

export default handler;