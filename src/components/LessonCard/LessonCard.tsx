import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Lesson } from "../../types/lesson";
import { useActiveLanguage } from "../../hooks/useActiveLanguage";

type CourseCardProps = {
  lesson: Lesson;
  order: number;
};

const TaskCard = ({ lesson, order }: CourseCardProps) => {
  const activeLang = useActiveLanguage();

  const lessonTitleKey = `title_${activeLang}` as keyof Lesson;

  return (
    <Link to={`/lesson/${lesson.id}`} className={styles.main}>
      <h2>
        <span className={styles.order}>{order}.</span>{" "}
        <span>{lesson[lessonTitleKey]}</span>
      </h2>
    </Link>
  );
};

export default TaskCard;
