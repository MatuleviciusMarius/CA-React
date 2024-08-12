import axios from "axios";
import { Course } from "../types/course";

const API_PORT = "3002";
const API_ENDPOINT = `http://localhost:${API_PORT}`;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export type CoursesResponse = {
  courses: Course[];
};

export const getCourses = async (jwt_token: string) => {
  const response = await api.get<CoursesResponse>("/courses", {
    headers: { authorization: jwt_token },
  });
  return response;
};
