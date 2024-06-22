import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '../../lib/middleware';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Token válido', user: (req as any).user });
};

export default validateToken(handler);