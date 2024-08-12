import cookie from "js-cookie";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../api/login";
import { RoutePaths } from "../router/routes";

export const useValidateUser = () => {
  const navigate = useNavigate();
  const jwt_token = cookie.get("jwt_token");

  const validateUser = useCallback( async (jwt_token: string) => {
    const response = await validateLogin(jwt_token);
  
    if (response.status !== 200) {
      navigate(RoutePaths.login);
      return;
    }
  }, [navigate]);
  
  useEffect(() => {
    if (!jwt_token) {
      navigate(RoutePaths.login);
      return;
    }
    validateUser(jwt_token);
  }, [jwt_token, navigate, validateUser]);

  return { jwt_token: jwt_token! };
}

