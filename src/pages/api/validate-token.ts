import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '../../lib/middleware';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('Token valido');
};

export default validateToken(handler);