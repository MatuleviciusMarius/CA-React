import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes.ts";
import LoginPage from "../Pages/login/index.tsx";
import CoursesPage from "../Pages/courses/index.tsx";
import NotFoundPage from "../Pages/notFound/index.tsx";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.login} element={<LoginPage />} />
      <Route path={RoutePaths.courses} element={<CoursesPage />} />
      <Route path={RoutePaths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}
