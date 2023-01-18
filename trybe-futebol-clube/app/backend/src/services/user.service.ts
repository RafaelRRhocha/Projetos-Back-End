import verifyJWT from '../utils/verifyJWT';
import User from '../database/models/user';

interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

export default class UserService {
  findByEmail = async (email: string): Promise<IUser | null> => {
    const getUser = await User.findOne({ where: { email } });
    return getUser;
  };

  getRole = (token: string) => {
    const { role } = verifyJWT(token);
    return { role };
  };
}
