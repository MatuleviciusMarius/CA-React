export type Lesson = {
  id: string;
  courseId: string;
  title: string;
  description: string;
  lessonContent: string;
  taskContent: string;
  difficulty: string;
  answer: string;
  taskHintContent: string;
  orderId: string;
  testsId: string;
  aiAssistsCount: number;
  submitsCount: number;
};
