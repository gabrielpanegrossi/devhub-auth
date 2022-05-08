import { DefaultApi } from './api';
import { ValidateEmail, Register, SignIn, SignInResponse } from './interface';

export const register = (data: Register) =>
  DefaultApi.request('/register', { method: 'POST', data });

export const signin = (data: SignIn) =>
  DefaultApi.request<SignInResponse>('/signin', { method: 'POST', data });

export const validateEmail = (email: string) =>
  DefaultApi.request<ValidateEmail>('/validate-email', { method: 'POST', data: { email } });

export const passwordRecovery = (email: string) =>
  DefaultApi.request('/password-recovery', { method: 'POST', data: { email } });

export const validateToken = (token: string) =>
  DefaultApi.request('/token-validation', { method: 'POST', data: { token } });

export const newPassword = (password: string) =>
  DefaultApi.request('/new-password', { method: 'POST', data: { password } });
