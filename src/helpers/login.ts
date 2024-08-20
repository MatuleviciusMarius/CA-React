import cookie from "js-cookie";

export const logout = () => {
  cookie.remove("jwt_token");
};
