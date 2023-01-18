import { compare } from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';
import createJWT from '../utils/createJWT';
import verifyJWT from '../utils/verifyJWT';

const newService = new UserService();

const messagesError = {
  allFields: { message: 'All fields must be filled' },
  incorrectEorP: { message: 'Incorrect email or password' },
  validToken: { message: 'Token must be a valid token' },
};

const authToken = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json(messagesError.allFields);

  const user = await newService.findByEmail(email);

  if (!user) return res.status(401).json(messagesError.incorrectEorP);

  const passwordVld = await compare(password, user.password);

  if (!passwordVld) return res.status(401).json(messagesError.incorrectEorP);

  const payload = {
    role: user.role,
    email: user.email,
  };

  const token = createJWT(payload);
  res.status(200).json({ token });
  next();
};

const authTokenHeader = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json(messagesError.validToken);
  }
  try {
    verifyJWT(authorization);
  } catch {
    return res.status(401).json(messagesError.validToken);
  }
  next();
};

export default {
  authToken,
  authTokenHeader,
};
