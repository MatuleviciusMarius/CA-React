import axios from "axios";
import { UserRegistration } from "../types/user";

const API_PORT = "3002";
const API_ENDPOINT = `http://localhost:${API_PORT}`;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export type RegisterResponse = {
  message: string;
  jwtToken: string;
};

export const registerUser = async (user: UserRegistration) => {
  const response = await api.post<RegisterResponse[]>("/users", user);
  return response;
};
