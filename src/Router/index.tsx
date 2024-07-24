import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes.ts";
import Login from "../pages/login";
import Courses from "../pages/courses";
import NotFound from "../pages/notFound";
import Main from "../pages/main";
import Register from "../pages/register";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.main} element={<Main />} />
      <Route path={RoutePaths.login} element={<Login />} />
      <Route path={RoutePaths.courses} element={<Courses />} />
      <Route path={RoutePaths.notFound} element={<NotFound />} />
      <Route path={RoutePaths.register} element={<Register />} />
    </Routes>
  );
}
