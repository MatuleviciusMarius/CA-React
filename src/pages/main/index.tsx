import { useEffect } from "react";
import Header from "../../components/Header";
import LoginForm from "../login/LoginForm/LoginForm";
import styles from "./Main.module.scss";
import cookie from "js-cookie";
import { validateLogin } from "../../api/login";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const validateUser = async (jwt_token: string) => {
    const response = await validateLogin(jwt_token);

    if (response.status !== 200) {
      navigate("/login");
      return;
    }
  };

  useEffect(() => {
    const jwt_token = cookie.get("jwt_token");

    if (!jwt_token) {
      navigate("/login");
      return;
    }
    validateUser(jwt_token);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <LoginForm />
    </div>
  );
}
