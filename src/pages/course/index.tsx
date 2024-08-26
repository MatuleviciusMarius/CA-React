import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Main.module.scss";
import { useParams } from "react-router-dom";
import { getLessons } from "../../api/lessons";
import { Lesson } from "../../types/lesson";
import LessonsWrapper from "../../components/TasksWrapper/LessonsWrapper";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";

export default function LoginPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const { id: courseId } = useParams();

  const retrieveTasks = async (courseId: string) => {
    const fetchedLessons = await getLessons(courseId);
    setLessons(fetchedLessons.data.tasks);
  };

  const [userInfo] = useState(() =>
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  useEffect(() => {
    retrieveTasks(courseId!);
  }, [courseId]);

  return (
    <div className={styles.container}>
      <Header isUserLoggedIn={userInfo.email} name={userInfo.name} />

      <div className={styles.wrapper}>
        <Button
          title="Continue"
          onClick={() => {
            console.log("xxx");
          }}
        />
      </div>

      {lessons ? <LessonsWrapper lessons={lessons} /> : <Spinner />}
    </div>
  );
}
