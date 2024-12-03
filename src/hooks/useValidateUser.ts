import cookie from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../api/login";
import { RoutePaths } from "../router/routes";

export const useValidateUser = () => {
  const navigate = useNavigate();
  const jwt_token = cookie.get("jwt_token");
  const [userInfo] = useState(() =>
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const validateUser = useCallback(async () => {
    const response = await validateLogin();

    // @ts-expect-error todo later
    if (response.status !== 200) {
      navigate(RoutePaths.login);
      localStorage.removeItem("user");
      return;
    }
  }, [navigate]);

  useEffect(() => {
    if (!jwt_token) {
      navigate(RoutePaths.login);
      localStorage.removeItem("user");
      return;
    }
    validateUser();
  }, [jwt_token, navigate, validateUser]);

  return { jwt_token: jwt_token!, user: userInfo };
};
