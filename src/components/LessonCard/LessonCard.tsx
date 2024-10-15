import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Lesson } from "../../types/lesson";
import checkMark from "../../assets/photos/check-mark.svg";
import lock from "../../assets/photos/lock.svg";

import { useActiveLanguage } from "../../hooks/useActiveLanguage";

type CourseCardProps = {
  lesson: Lesson;
  order: number;
  isCompleted: boolean;
  isLocked: boolean;
};

const TaskCard = ({
  lesson,
  order,
  isCompleted,
  isLocked,
}: CourseCardProps) => {
  const activeLang = useActiveLanguage();

  const lessonTitleKey = `title_${activeLang}` as keyof Lesson;

  return (
    <Link
      to={!isLocked ? `/lesson/${lesson.id}` : ""}
      className={`${styles.main} ${isCompleted && styles.completed} ${
        isLocked && styles.locked
      }`}
    >
      <div className={styles.order}>{order}. Lesson</div>
      <h2 className={styles.lessonWrapper}>
        {isCompleted && <img className={styles.check} src={checkMark} />}
        {isLocked && <img className={styles.lock} src={lock} />}

        <span className={styles.title}>{lesson[lessonTitleKey]}</span>
      </h2>
    </Link>
  );
};

export default TaskCard;
