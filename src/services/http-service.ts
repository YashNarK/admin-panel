import { AxiosRequestConfig } from "./api-client";
import apiClient from "./api-client";

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  async get<T>(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    const resp = await apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
      ...requestConfig,
    });

    return {
      resp,
      cancel: () => {
        controller.abort();
      },
    };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
export { HttpService };
