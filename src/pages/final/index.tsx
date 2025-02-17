import { useEffect } from "react";
import Header from "../../components/Header/Header";
import CourseEnding from "../../components/CourseEnding/CourseEnding";
import { useNavigate, useParams } from "react-router-dom";
import { getIsCourseFinished } from "../../api/progress";
import { useUserData } from "../../hooks/useUserData";

const Final = () => {
  const { id: courseId } = useParams();
  const userInfo = useUserData();
  const navigate = useNavigate();

  const retrieveTasks = async (courseId: string) => {
    const isCourseFinished = await getIsCourseFinished({
      userId: userInfo.id,
      courseId: courseId,
    });

    if (!isCourseFinished) {
      navigate("/");
    }
  };

  useEffect(() => {
    retrieveTasks(courseId!);
  }, [courseId]);

  return (
    <div>
      <Header isUserLoggedIn={!!userInfo.email} name={userInfo.name} />
      <CourseEnding />
    </div>
  );
};

export default Final;
