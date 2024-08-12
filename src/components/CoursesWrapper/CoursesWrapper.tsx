import CourseCard from "../CourseCard/CourseCard";
import { Course } from "../../types/course";
import styles from "./styles.module.css";

type CourseCardProps = {
  courses: Course[];
};

const CoursesWrapper = ({ courses }: CourseCardProps) => {
  return (
    <div className={styles.main}>
      {courses?.map((c) => (
        <CourseCard
          key={c.id}
          id={c.id}
          title={c.title}
          description={c.description}
          imgUrl={c.imgUrl}
        />
      ))}
    </div>
  );
};

export default CoursesWrapper;
