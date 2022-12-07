import axios, { AxiosRequestConfig } from "axios";
const BASE_URL = "https://conduit.productionready.io/api/";
export const httpClient = axios.create({
  baseURL: BASE_URL,
});

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers!.Authorization = `Token ${token}`;
  }
  return config;
});
