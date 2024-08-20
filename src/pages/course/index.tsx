import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Main.module.scss";
import { useParams } from "react-router-dom";

import { getTasks } from "../../api/lessons";
import { Task } from "../../types/lesson";
import TasksWrapper from "../../components/TasksWrapper/TasksWrapper";
import { useValidateUser } from "../../hooks/useValidateUser";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";

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

      <div className={styles.wrapper}>
        <Button
          title="Continue"
          onClick={() => {
            console.log("xxx");
          }}
        />
      </div>

      {tasks ? <TasksWrapper tasks={tasks} /> : <Spinner />}
    </div>
  );
}
