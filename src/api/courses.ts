import { Course } from "../types/course";
import basApi from "./baseApi";

export type CoursesResponse = {
  courses: Course[];
};

export const getCourses = async (jwt_token: string) => {
  const response = await basApi.get<CoursesResponse>("/courses", {
    headers: { authorization: jwt_token },
  });
  return response;
};
