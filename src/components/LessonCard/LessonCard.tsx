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

  return (
    <Link to={`/task/${lesson.id}`} className={styles.main}>
      <h2>
        <span className={styles.order}>{order}.</span>{" "}
        <span>{lesson[`title_${activeLang}`]}</span>
      </h2>
    </Link>
  );
};

export default TaskCard;
