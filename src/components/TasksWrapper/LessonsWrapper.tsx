import styles from "./styles.module.css";
import { Lesson } from "../../types/lesson";
import LessonCard from "../LessonCard/LessonCard";

type CourseCardProps = {
  lessons: Lesson[];
  lastCompletedlessonIdx: number;
};

const LessonsWrapper = ({ lessons, lastCompletedlessonIdx }: CourseCardProps) => {
  return (
    <div className={styles.main}>
      {lessons?.map((l, idx) => (
        <LessonCard key={l.id} lesson={l} order={idx + 1} isCompleted={idx < lastCompletedlessonIdx} isLocked={idx > lastCompletedlessonIdx} />
      ))}
    </div>
  );
};

export default LessonsWrapper;
