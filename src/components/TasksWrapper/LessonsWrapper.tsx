import styles from "./styles.module.css";
import { Lesson } from "../../types/lesson";
import LessonCard from "../LessonCard/LessonCard";

type CourseCardProps = {
  lessons: Lesson[];
};

const LessonsWrapper = ({ lessons }: CourseCardProps) => {
  return (
    <div className={styles.main}>
      <div
        className={styles.continue}
        onClick={() => {
          console.log("xxx");
        }}
      >
        Continue
      </div>
      {lessons?.map((l, idx) => (
        <LessonCard key={l.id} lesson={l} order={idx + 1} />
      ))}
    </div>
  );
};

export default LessonsWrapper;
