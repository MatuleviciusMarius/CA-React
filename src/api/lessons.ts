import { Lesson } from "../types/lesson";
import baseApi from "./baseApi";

export type LessonsResponse = {
  tasks: Lesson[];
};

export const getTasks = async (courseId: string) => {
  const response = await baseApi.get<LessonsResponse>(`/lessons/course/${courseId}`);
  return response;
};

export type LessonResponse = {
  task: Lesson;
};

export const getTaskById = async (id: string) => {
  const response = await baseApi.get<LessonResponse>(`/lessons/${id}`);
  return response;
};

export const getTaskByLevel = async (level: number) => {
  const response = await baseApi.get<LessonsResponse>(`/lessons/${level}`);
  return response;
};

export type CompleteLessonModel = {
  code: string;
  userId: string;
};

export const completeLesson = async (lessonId: string, model: CompleteLessonModel) => {
  const response = await baseApi.post(`/lessons/${lessonId}/complete`, model);

  console.log(response);
};
