import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./Main.module.scss";
import cookie from "js-cookie";
import { validateLogin } from "../../api/login";
import { useNavigate, useParams } from "react-router-dom";

import { getTasks } from "../../api/lessons";
import { Task } from "../../types/lesson";
import TasksWrapper from "../../components/TasksWrapper/TasksWrapper";

export default function LoginPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();
  const { id: courseId } = useParams();

  const validateUser = async (jwt_token: string) => {
    const response = await validateLogin(jwt_token);

    if (response.status !== 200) {
      navigate("/login");
      return;
    }
  };

  const retrieveTasks = async (courseId: string, jwt_token: string) => {
    const fetchedTasks = await getTasks(courseId, jwt_token);
    setTasks(fetchedTasks.data.tasks);
  };

  useEffect(() => {
    const jwt_token = cookie.get("jwt_token");

    if (!jwt_token) {
      navigate("/login");
      return;
    }
    validateUser(jwt_token);
    retrieveTasks(courseId!, jwt_token);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <TasksWrapper tasks={tasks} />
    </div>
  );
}
