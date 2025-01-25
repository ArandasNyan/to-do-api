import UserModel from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/environment';

class AuthService {
  static async register(userData: { username: string; email: string; password: string }) {
    const existingUser = await UserModel.findOne({ email: userData.email });

    if (existingUser) {
      throw new Error('E-mail já cadastrado');
    }

    // Hash da senha antes de salvar
    userData.password = await bcrypt.hash(userData.password, Number(ENV.saltRounds));

    const user = await UserModel.create(userData);
    return user;
  }

  static async login(email: string, password: string) {
    const user = await UserModel.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign({ id: user._id }, ENV.jwtSecret, { expiresIn: '1h' });
    return token;
  }
}

export default AuthService;
