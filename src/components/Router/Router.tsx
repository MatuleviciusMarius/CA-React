import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./routes";
import LoginPage from "../Pages/LoginPage/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.login} element={<LoginPage />} />
      
      <Route path={RoutePaths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}
