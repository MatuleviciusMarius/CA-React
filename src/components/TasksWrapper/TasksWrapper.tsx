import styles from "./styles.module.css";
import { Task } from "../../types/task";
import TaskCard from "../TaskCard/TaskCard";

type CourseCardProps = {
  tasks: Task[];
};

const TasksWrapper = ({ tasks }: CourseCardProps) => {
  return (
    <div className={styles.main}>
      {tasks?.map((t, idx) => (
        <TaskCard key={t.id} id={t.id} title={t.title} order={idx + 1} />
      ))}
    </div>
  );
};

export default TasksWrapper;
