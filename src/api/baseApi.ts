import axios from "axios";
import Cookies from "js-cookie";

const API_ENDPOINT = import.meta.env.VITE_SECRET_KEY;

const baseApi = axios.create({
  baseURL: API_ENDPOINT,
});

baseApi.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwt_token");

    if (token) {
      config.headers.authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseApi;
