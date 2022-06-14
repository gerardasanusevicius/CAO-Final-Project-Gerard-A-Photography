import ApiService, { formatError } from './api-service-new';
import { Credentials, Admin } from '../types';

export type AuthResponseBody = {
  admin: Admin,
  token: string,
};

export const login = async (credentials: Credentials): Promise<AuthResponseBody> => {
  try {
    const response = await ApiService.post<AuthResponseBody>('/api/auth/login', credentials);

    return response.data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

export const authenticate = async (token: string): Promise<AuthResponseBody> => {
  try {
    const response = await ApiService.post<AuthResponseBody>('/api/auth/authenticate', {}, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const AuthService = {
  login,
  authenticate,
};

export default AuthService;
