import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes";
import LoginPage from "../components/Pages/LoginPage/LoginPage";
import NotFoundPage from "../components/Pages/NotFoundPage/NotFoundPage";
import CoursesPage from "../components/Pages/CoursesPage/CoursesPage";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.login} element={<LoginPage />} />
      <Route path={RoutePaths.courses} element={<CoursesPage />} />
      <Route path={RoutePaths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}
