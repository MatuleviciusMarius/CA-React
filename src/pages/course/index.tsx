import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./Main.module.scss";
import cookie from "js-cookie";
import { validateLogin } from "../../api/login";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getTasks } from "../../api/tasks";
import { Task } from "../../types/task";

export default function LoginPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const validateUser = async (jwt_token: string) => {
    const response = await validateLogin(jwt_token);

    if (response.status !== 200) {
      navigate("/login");
      return;
    }
  };

  const retrieveCourses = async (jwt_token: string) => {
    const fetchedTasks = await getTasks("xxx", jwt_token);
    setTasks(fetchedTasks.data.tasks);
  };

  useEffect(() => {
    const jwt_token = cookie.get("jwt_token");

    console.log(searchParams);

    if (!jwt_token) {
      navigate("/login");
      return;
    }
    validateUser(jwt_token);
    retrieveCourses(jwt_token);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      course
    </div>
  );
}
