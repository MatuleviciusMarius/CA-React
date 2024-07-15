import { Card, CardContent, CardHeader } from "@mui/material";
import { CourseType } from "../../../../api/fetchers";

type CourseCardProps = {
  course: CourseType;
};
export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card>
      <CardHeader title={course.title} />
      <CardContent>{course.description}</CardContent>
    </Card>
  );
}
