import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <PageWrapper>
      <div className={styles.absoluteWrapper}>
        <Header  />
      </div>
      <div className={styles.wrapper}>
        <Heading />
        <LoginForm />
      </div>
    </PageWrapper>
  );
}
