import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type CourseCardProps = {
  id: string;
  title: string;
  order: number;
};

const TaskCard = ({ id, title, order }: CourseCardProps) => {
  return (
    <Link to={`/task/${id}`} className={styles.main}>
      <h2>
        <span className={styles.order}>{order}.</span> <span>{title}</span>
      </h2>
    </Link>
  );
};

export default TaskCard;
