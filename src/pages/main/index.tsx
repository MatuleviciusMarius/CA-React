import Header from "../../components/Header";
import LoginForm from "../login/LoginForm/LoginForm";
import styles from "./Main.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Header />
      <LoginForm />
    </div>
  );
}
