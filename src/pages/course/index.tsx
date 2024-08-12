import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./Main.module.scss";
import { useParams } from "react-router-dom";

import { getTasks } from "../../api/tasks";
import { Task } from "../../types/task";
import TasksWrapper from "../../components/TasksWrapper/TasksWrapper";
import { useValidateUser } from "../../hooks/useValidateUser";

export default function LoginPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { id: courseId } = useParams();

  const { jwt_token } = useValidateUser();

  const retrieveTasks = async (courseId: string, jwt_token: string) => {
    const fetchedTasks = await getTasks(courseId, jwt_token);
    setTasks(fetchedTasks.data.tasks);
  };

  useEffect(() => {
    retrieveTasks(courseId!, jwt_token);
  }, [courseId, jwt_token]);

  return (
    <div className={styles.container}>
      <Header />
      <TasksWrapper tasks={tasks} />
    </div>
  );
}
