import { User, UserLogin } from "../types/user";
import baseApi from "./baseApi";
import Cookies from "js-cookie";

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

export const validateLogin = async () => {
  try {
    const response = await baseApi.get("/users/validate");

    return response;
  } catch (error) {
    Cookies.remove("jwt_token");
    localStorage.removeItem("user");
    return error;
  }
};
