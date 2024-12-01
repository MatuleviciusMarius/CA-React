import baseApi from "./baseApi";

type ProgressMutationBody = {
  lessonId: string;
  lessonOrder: number;
  courseId: string;
};

type ProgressQuery = {
  lessonId: string;
  userId: string;
  courseId: string;
};

export const createProgress = async ({
  lessonId,
  lessonOrder,
  courseId,
}: ProgressMutationBody) => {
  const progressBody = {
    lessonId,
    lessonOrder,
    courseId,
  };

  const response = await baseApi.post(`/progress`, progressBody);
  return response;
};

export const getProgress = async ({
  lessonId,
  userId,
  courseId,
}: ProgressQuery) => {
  const response = await baseApi.get(
    `/progress/${courseId}/${userId}/${lessonId}`
  );
  return response;
};

type ProgressQueryBody = {
  courseId: string;
};

export const getLatestCompletedLesson = async ({
  courseId,
}: ProgressQueryBody) => {
  const response = await baseApi.get(`/progress/${courseId}`);
  return response;
};
