import axios, { AxiosError, CanceledError, AxiosRequestConfig } from "axios";

export default axios.create({
  baseURL: "https://my-json-server.typicode.com/YashNarK/demo-admin-db",
});

export { CanceledError, AxiosError };
export type { AxiosRequestConfig };
