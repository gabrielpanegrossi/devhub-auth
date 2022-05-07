import api from './api';

export const DefaultApi = api(`${process.env.REACT_APP_BACKEND_URL}`, {});
