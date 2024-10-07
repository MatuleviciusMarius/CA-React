import baseApi from "./baseApi";

type ProgressBody = {
  lessonId: string;
  lessonOrder: number;
  courseId: string;
};

export const createProgress = async ({
  lessonId,
  lessonOrder,
  courseId,
}: ProgressBody) => {
  const progressBody = {
    lessonId,
    lessonOrder,
    courseId,
  };

  const response = await baseApi.post(`/progress`, progressBody);
  return response;
};
