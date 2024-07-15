import { Box, CircularProgress } from "@mui/material";
import { useCourses } from "../../../api/hooks/useCourses";
import CourseCard from "./CourseCard/CourseCard";

export default function CoursesContainer() {
  const { courses, isLoading } = useCourses();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      {courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Box>
  );
}
