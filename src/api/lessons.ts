import { Code } from "../components/SandpackEditor/hooks/useCurrentCode";
import { Lesson } from "../types/lesson";
import baseApi from "./baseApi";

export type LessonsResponse = {
  tasks: Lesson[];
};

export const getLessons = async (courseId: string) => {
  const response = await baseApi.get<LessonsResponse>(
    `/lessons/course/${courseId}`
  );
  return response;
};

export type LessonResponse = {
  task: Lesson;
};

export const getLessonById = async (id: string) => {
  const response = await baseApi.get<LessonResponse>(`/lessons/${id}`);
  return response;
};

export const getLessonByLevel = async (level: number) => {
  const response = await baseApi.get<LessonsResponse>(`/lessons/${level}`);
  return response;
};

export type CompleteLessonModel = {
  code: Code;
  userId: string;
  lessonId: string;
  courseId: string;
};

export type CompleteLessonResponse = {
  name: {
    en: string;
    lt: string;
  };
  result: string;
}[];

export const completeLesson = async (
  lessonId: string,
  model: CompleteLessonModel
) => {
  const response = await baseApi.post<CompleteLessonResponse>(
    `/lessons/${lessonId}/complete`,
    model
  );
  return response;
};

export type TestNamesResponse = {
  en: string;
  lt: string;
}[];

export const getTestNames = async (lessonId: string) => {
  const response = await baseApi.get<TestNamesResponse>(
    `/lessons/${lessonId}/testsNames`
  );
  return response;
};

export type AiHelpModel = {
  code: Code;
  lessonId: string;
};

export type AiHelpResponse = {
  data: string;
};

export const getAiHelp = async (lessonId: string, body: AiHelpModel) => {
  const response = await baseApi.post<AiHelpResponse>(
    `/openai/${lessonId}`,
    body
  );
  return response.data.data;
};
