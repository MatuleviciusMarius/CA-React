import { CourseProgresses } from "./course";

export type User = {
  name: string;
  surname: string;
  email: string;
  country: string;
  certificateURLs: string[];
  courseProgress: CourseProgresses;
};

export type UserRegistration = Omit<
  User,
  "courseProgress" | "certificateURLs"
> & {
  occupation: string;
  phoneNumber: string;
  password: string;
  dateOfBirth: Date;
};
