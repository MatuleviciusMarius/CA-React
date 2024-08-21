import axios from "axios";
import Cookies from "js-cookie";

const API_PORT = "3002";
const API_ENDPOINT = `http://localhost:${API_PORT}`;

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
  },
);

export default baseApi;
