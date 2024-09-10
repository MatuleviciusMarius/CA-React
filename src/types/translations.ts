import { SupportedLanguages } from "../../i18n";

export type LessonTitle = {
  [key in `title_${SupportedLanguages}`]: string;
};

export type LessonContent = {
  [key in `lessonContent_${SupportedLanguages}`]: string;
};

export type TaskContent = {
  [key in `taskContent_${SupportedLanguages}`]: string;
};
