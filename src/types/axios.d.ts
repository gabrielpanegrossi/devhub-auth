// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosInstance, AxiosRequestConfig } from 'axios';

declare module 'axios' {
  interface AxiosInstance {
    request<Data>(path: string, config?: AxiosRequestConfig): Promise<Data>;
  }
}
