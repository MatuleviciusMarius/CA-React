import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Main.module.scss";
import { getCourses } from "../../api/courses";
import { Course } from "../../types/course";
import CoursesWrapper from "../../components/CoursesWrapper/CoursesWrapper";
import Spinner from "../../components/Spinner/Spinner";

export default function LoginPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [userInfo] = useState(() =>
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const retrieveCourses = async () => {
    const fetchedCourses = await getCourses();
    setCourses(fetchedCourses.data.courses);
  };

  useEffect(() => {
    retrieveCourses();
  }, []);

  return (
    <div className={styles.container}>
      <Header isUserLoggedIn={userInfo.email} name={userInfo.name} />
      {courses ? <CoursesWrapper courses={courses} /> : <Spinner />}
    </div>
  );
}
