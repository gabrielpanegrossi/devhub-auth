import { DefaultApi } from './api';

export const register = (data: {}) => DefaultApi.request('/register', { method: 'POST' });
