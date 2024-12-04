import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes.ts";
import Login from "../pages/login/index.tsx";
import NotFound from "../pages/notFound/index.tsx";
import Main from "../pages/main/index.tsx";
import Register from "../pages/register/index.tsx";
import Course from "../pages/course/index.tsx";
import Lesson from "../pages/lesson/index.tsx";
import ProtectedRoutesWrapper from "./ProtectedRoutesWrapper/ProtectedRoutesWrapper.tsx";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.login} element={<Login />} />
      <Route path={RoutePaths.register} element={<Register />} />
      <Route element={<ProtectedRoutesWrapper />}>
        <Route path={RoutePaths.main} element={<Main />} />
        <Route path={RoutePaths.notFound} element={<NotFound />} />
        <Route path={RoutePaths.course} element={<Course />} />
        <Route path={RoutePaths.task} element={<Lesson />} />
      </Route>
    </Routes>
  );
}
