import axios from 'axios';
import { Crudentials, TemporaryAdmin, Admin } from '../../../types';

namespace AuthService {

  export const login = async ({ username, password }: Crudentials): Promise<Admin> => {
    const { data: tempAdmins } = await axios.get<TemporaryAdmin[]>(`http://localhost:8000/admin?username=${username}`);
    if (tempAdmins.length === 0) {
      throw new Error('User with such email was not found');
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
