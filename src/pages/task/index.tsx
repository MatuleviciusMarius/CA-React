import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./Main.module.scss";
import { useParams } from "react-router-dom";

import { getTaskById } from "../../api/tasks";
import { Task } from "../../types/task";
import { useValidateUser } from "../../hooks/useValidateUser";
import MonacoCodeEditor from "../../components/MonacoCodeEditor/MonacoCodeEditor";
import { EditorProvider } from "../../components/MonacoCodeEditor/EditorContext/EditorContext";
import CodeRenderer from "../../components/MonacoCodeEditor/CodeRenderer/CodeRenderer";
import { Box } from "@mui/material";

export default function LoginPage() {
  const [task, setTask] = useState<Task>();
  const { id } = useParams();

  const { jwt_token } = useValidateUser();

  const retrieveTask = async (id: string, jwt_token: string) => {
    const fetchedTasks = await getTaskById(id, jwt_token);
    setTask(fetchedTasks.data.task);
  };

  useEffect(() => {
    retrieveTask(id!, jwt_token);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <EditorProvider>
        <Box display={"flex"}>
          <MonacoCodeEditor />
          <CodeRenderer />
        </Box>
      </EditorProvider>
      {task && <div>{task.title}</div>}
    </div>
  );
}
