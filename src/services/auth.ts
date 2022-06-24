import { DefaultApi } from './api';
import {
  emailExistsResponse,
  Register,
  SignIn,
  SignInResponse,
  passwordRecoveryCodeResponse,
} from './interface';

export const register = (data: Register) =>
  DefaultApi.request('/register', { method: 'POST', data });

export const signin = (data: SignIn) =>
  DefaultApi.request<SignInResponse>('/signin', { method: 'POST', data });

export const emailExists = (email: string) =>
  DefaultApi.request<emailExistsResponse>('/email-exists', { method: 'POST', data: { email } });

export const validateAuthorization = () =>
  DefaultApi.request('/validate-authorization', { method: 'POST', data: {} });

export const passwordRecoveryCode = (data: { email: string; code: string }) =>
  DefaultApi.request<passwordRecoveryCodeResponse>('password-recovery/code', {
    method: 'POST',
    data,
  });

export const newPassword = (password: string) =>
  DefaultApi.request('password-recovery/create', { method: 'POST', data: { password } });
