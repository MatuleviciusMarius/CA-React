import { Lesson } from "../types/lesson";
import baseApi from "./baseApi";

export type LessonsResponse = {
  tasks: Lesson[];
};

export const getTasks = async (courseId: string, jwt_token: string) => {
  const response = await baseApi.get<LessonsResponse>(
    `/lessons/course/${courseId}`,
    {
      headers: { authorization: jwt_token },
    }
  );
  return response;
};

export type LessonResponse = {
  task: Lesson;
};

export const getTaskById = async (id: string, jwt_token: string) => {
  const response = await baseApi.get<LessonResponse>(`/lessons/${id}`, {
    headers: { authorization: jwt_token },
  });
  return response;
};

export const getTaskByLevel = async (level: number, jwt_token: string) => {
  const response = await baseApi.get<LessonsResponse>(`/lessons/${level}`, {
    headers: { authorization: jwt_token },
  });
  return response;
};
