import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '../../lib/middleware';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('Token válido');
};

export default validateToken(handler);