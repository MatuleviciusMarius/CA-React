import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./Main.module.scss";
import cookie from "js-cookie";
import { validateLogin } from "../../api/login";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../api/courses";
import { Course } from "../../types/course";
import CourseCard from "../../components/CourseCard/CourseCard";

export default function LoginPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  const validateUser = async (jwt_token: string) => {
    const response = await validateLogin(jwt_token);

    if (response.status !== 200) {
      navigate("/login");
      return;
    }
  };

  const retrieveCourses = async (jwt_token: string) => {
    const fetchedCourses = await getCourses(jwt_token);
    setCourses(fetchedCourses.data.courses);
  };

  useEffect(() => {
    const jwt_token = cookie.get("jwt_token");

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
      {courses?.map((c) => (
        <CourseCard
          id={c.id}
          title={c.title}
          description={c.description}
          imgUrl={c.imgUrl}
        />
      ))}
    </div>
  );
}
