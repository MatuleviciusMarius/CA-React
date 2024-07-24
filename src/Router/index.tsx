import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes.ts";
import LoginPage from "../pages/login/index.tsx";
import CoursesPage from "../pages/courses/index.tsx";
import NotFoundPage from "../pages/notFound/index.tsx";
import MainPage from "../pages/main";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.main} element={<MainPage />} />
      <Route path={RoutePaths.login} element={<LoginPage />} />
      <Route path={RoutePaths.courses} element={<CoursesPage />} />
      <Route path={RoutePaths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}
