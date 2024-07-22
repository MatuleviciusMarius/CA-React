import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes.ts";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/notFound";
import CoursesPage from "../pages/courses";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.login} element={<LoginPage />} />
      <Route path={RoutePaths.courses} element={<CoursesPage />} />
      <Route path={RoutePaths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}
