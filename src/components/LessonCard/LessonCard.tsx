import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Lesson } from "../../types/lesson";
import checkMark from "../../assets/photos/check-mark.svg";
import { useActiveLanguage } from "../../hooks/useActiveLanguage";

type CourseCardProps = {
  lesson: Lesson;
  order: number;
  isCompleted: boolean;
};

const TaskCard = ({ lesson, order, isCompleted }: CourseCardProps) => {
  const activeLang = useActiveLanguage();

  const lessonTitleKey = `title_${activeLang}` as keyof Lesson;

  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className={`${styles.main} ${isCompleted && styles.completed}`}
    >
      <h2 className={styles.lessonWrapper}>
        {isCompleted ? (
          <img className={styles.check} src={checkMark} />
        ) : (
          <span className={styles.order}>{order}. </span>
        )}

        <span>{lesson[lessonTitleKey]}</span>
      </h2>
    </Link>
  );
};

export default TaskCard;
