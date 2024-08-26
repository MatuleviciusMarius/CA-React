import { SupportedLanguages } from "../../i18n";

export type Lesson = {
  [key in `title_${SupportedLanguages}`]: string;
};
