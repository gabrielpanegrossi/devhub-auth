import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const getConfig = () => {
  return {
    headers: {
      Accept: 'application/json',
    },
  };
};

const api = (baseURL: string, config?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL, ...config });

  instance.request = async <Data>(path: string, requestConfig?: AxiosRequestConfig) => {
    const mergedConfig: AxiosRequestConfig = { ...requestConfig, ...getConfig() };

    return instance(path, mergedConfig).then((response: AxiosResponse<Data>) => response.data);
  };

  return instance;
};

export default api;
