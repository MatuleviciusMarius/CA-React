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

type ProgressFinishQuery = {
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

export const getIsCourseFinished = async ({
  userId,
  courseId,
}: ProgressFinishQuery) => {
  try {
    const response = await baseApi.get(
      `/progress/course/status/${courseId}/${userId}`
    );
    return response;
  } catch (err) {
    console.log(err);
    // @ts-expect-error i am too lazy
    return err.response.data.isFinished;
  }
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
