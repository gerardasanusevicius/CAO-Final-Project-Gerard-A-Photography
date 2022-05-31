import axios from 'axios';
import { Credentials, TemporaryAdmin, Admin } from '../../../types';

export type AuthPromise = (credentials: Credentials) => Promise<Admin>;

namespace AuthService {

  export const login: AuthPromise = async ({ username, password }: Credentials) => {
    const { data: tempAdmins } = await axios.get<TemporaryAdmin[]>(`http://localhost:8000/admin?username=${username}`);
    if (tempAdmins.length === 0) {
      throw new Error('Admin with such username was not found');
    }

    const [tempAdmin] = tempAdmins;

    if (tempAdmin.password !== password) {
      throw new Error('Passwords do not match');
    }

    return {
      username: tempAdmin.username,
      password: tempAdmin.password,
    };
  };
}

export default AuthService;
