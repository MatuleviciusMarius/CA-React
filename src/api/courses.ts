import { Course } from "../types/course";
import basApi from "./baseApi";

export type CoursesResponse = {
  courses: Course[];
};

export const getCourses = async () => {
  const response = await basApi.get<CoursesResponse>("/courses");
  return response;
};

export type CourseResponse = {
  course: Course;
};

export const getCourseById = async (id: string) => {
  const response = await basApi.get<CourseResponse>(`/courses/${id}`);
  return response;
};
