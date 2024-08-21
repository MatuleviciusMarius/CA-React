import { Course } from "../types/course";
import basApi from "./baseApi";

export type CoursesResponse = {
  courses: Course[];
};

export const getCourses = async () => {
  const response = await basApi.get<CoursesResponse>("/courses");
  return response;
};
