import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./Main.module.scss";
import cookie from "js-cookie";
import { validateLogin } from "../../api/login";
import { useNavigate, useParams } from "react-router-dom";

import { getTaskById } from "../../api/tasks";
import { Task } from "../../types/task";

export default function LoginPage() {
  const [task, setTask] = useState<Task>();
  const navigate = useNavigate();
  const { id } = useParams();

  const validateUser = async (jwt_token: string) => {
    const response = await validateLogin(jwt_token);

    if (response.status !== 200) {
      navigate("/login");
      return;
    }
  };

  const retrieveTask = async (id: string, jwt_token: string) => {
    const fetchedTasks = await getTaskById(id, jwt_token);
    setTask(fetchedTasks.data.task);
  };

  useEffect(() => {
    const jwt_token = cookie.get("jwt_token");

    if (!jwt_token) {
      navigate("/login");
      return;
    }
    validateUser(jwt_token);
    retrieveTask(id!, jwt_token);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {task && <div>{task.title}</div>}
    </div>
  );
}
