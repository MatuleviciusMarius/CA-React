import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes.ts";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Main from "../pages/main";
import Register from "../pages/register";
import Course from "../pages/course";
import Lesson from "../pages/lesson";
import ProtectedRoutesWrapper from "./ProtectedRoutesWrapper/ProtectedRoutesWrapper.tsx";
import { EditorProvider } from "../components/MonacoCodeEditor/EditorContext/EditorContext.tsx";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.login} element={<Login />} />
      <Route path={RoutePaths.register} element={<Register />} />
      <Route element={<ProtectedRoutesWrapper />}>
        <Route path={RoutePaths.main} element={<Main />} />
        <Route path={RoutePaths.notFound} element={<NotFound />} />
        <Route path={RoutePaths.course} element={<Course />} />
        <Route
          path={RoutePaths.task}
          element={
            <EditorProvider>
              <Lesson />
            </EditorProvider>
          }
        />
      </Route>
    </Routes>
  );
}
