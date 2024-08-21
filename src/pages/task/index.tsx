import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";

import { getTaskById } from "../../api/lessons";
import { Task } from "../../types/lesson";
import MonacoCodeEditor from "../../components/MonacoCodeEditor/MonacoCodeEditor";
import { EditorProvider } from "../../components/MonacoCodeEditor/EditorContext/EditorContext";
import CodeRenderer from "../../components/MonacoCodeEditor/CodeRenderer/CodeRenderer";
import { Box, Typography } from "@mui/material";
import styles from "./Main.module.scss";

export default function LoginPage() {
  const [task, setTask] = useState<Task>();
  const { id } = useParams();

  const retrieveTask = async (id: string) => {
    const fetchedTasks = await getTaskById(id);
    setTask(fetchedTasks.data.task);
  };

  useEffect(() => {
    retrieveTask(id!);
  }, []);

  return (
    <Box minHeight={"100vh"}>
      <Header />
      <Box height={"100%"} padding={1} className={styles.taskDescription}>
        {task && <Typography>{task.title}</Typography>}
      </Box>
      <EditorProvider>
        <Box padding={1} display={"flex"}>
          <MonacoCodeEditor />
          <CodeRenderer />
        </Box>
      </EditorProvider>
    </Box>
  );
}
