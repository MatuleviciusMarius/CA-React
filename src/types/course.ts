export type CourseProgress = {
  courseId: string;
  lastCompletedLesson: number;
};

export type CourseProgresses = CourseProgress[];

export type Course = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  prerequisites: string;
  imgUrl: string;
  displayOrder: number;
  skills: string[];
  totalTasks: number;
};
