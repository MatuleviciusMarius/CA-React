export type Lesson = {
  id: string;
  courseId: string;
  difficulty: string;
  answer: string;
  taskHintContent: string;
  orderId: string;
  testsId: string;
  durationMins: number;
  lessonContent_en: string;
  lessonContent_lt: string;
  taskContent_en: string;
  taskContent_lt: string;
  title_en: string;
  title_lt: string;
  taskHintContent_en: string;
  taskHintContent_lt: string;
  initialCode: string;

  // aiAssistsCount: number;
  // submitsCount: number;
};
