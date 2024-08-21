import { User, UserRegistration } from "../types/user";
import baseApi from "./baseApi";

export type RegisterResponse = {
  message: string;
  jwt_token: string;
  user: User;
};

export const registerUser = async (user: UserRegistration) => {
  const response = await baseApi.post<RegisterResponse>("/users", user);
  return response;
};
