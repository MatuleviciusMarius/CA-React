import axios from "axios";
import { User, UserLogin } from "../types/user";

const API_PORT = "3002";
const API_ENDPOINT = `http://localhost:${API_PORT}`;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export type LoginResponse = {
  message: string;
  jwt_token: string;
  user: User;
};

export const login = async (user: UserLogin) => {
  const response = await api.post<LoginResponse>("/users/login", user);
  localStorage.setItem("user", JSON.stringify(response.data.user));
  return response;
};

export const validateLogin = async (jwt_token: string) => {
  const response = await api.get("/users/validate", {
    headers: { authorization: jwt_token },
  });
  return response;
};
