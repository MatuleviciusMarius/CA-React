import { User, UserLogin } from "../types/user";
import baseApi from "./baseApi";

export type LoginResponse = {
  message: string;
  jwt_token: string;
  user: User;
};

export const login = async (user: UserLogin) => {
  const response = await baseApi.post<LoginResponse>("/users/login", user);
  localStorage.setItem("user", JSON.stringify(response.data.user));
  return response;
};

export const validateLogin = async (jwt_token: string) => {
  const response = await baseApi.get("/users/validate", {
    headers: { authorization: jwt_token },
  });
  return response;
};
