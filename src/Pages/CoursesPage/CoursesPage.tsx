import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CoursesContainer from "./CoursesContainer/CoursesContainer";

export default function CoursesPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h3">Courses</Typography>
      <CoursesContainer />
    </Container>
  );
}
