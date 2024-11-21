export type Lesson = {
  id: string;
  courseId: string;
  difficulty: string;
  answer: string;
  taskHintContent: string;
  orderId: number;
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
  initialHtmlCode: string;
  initialCssCode: string;
  initialJsCode: string;
  isHtmlEditor: boolean;
  isCssEditor: boolean;
  isJsEditor: boolean;

  // aiAssistsCount: number;
  // submitsCount: number;
};
