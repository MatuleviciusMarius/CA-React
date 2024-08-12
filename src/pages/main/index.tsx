import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./Main.module.scss";
import { getCourses } from "../../api/courses";
import { Course } from "../../types/course";
import CoursesWrapper from "../../components/CoursesWrapper/CoursesWrapper";
import { useValidateUser } from "../../hooks/useValidateUser";

export default function LoginPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const { jwt_token } = useValidateUser();


  const retrieveCourses = async (jwt_token: string) => {
    const fetchedCourses = await getCourses(jwt_token);
    setCourses(fetchedCourses.data.courses);
  };

  useEffect(() => {
    retrieveCourses(jwt_token);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <CoursesWrapper courses={courses} />
    </div>
  );
}
