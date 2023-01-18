import { sign } from 'jsonwebtoken';

const createJWT = (payload: unknown) => {
  const token = sign({ payload }, process.env.JWT_SECRET as string, { expiresIn: '10d' });
  return token;
};

export default createJWT;
