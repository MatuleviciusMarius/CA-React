import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
import headingImg from "../../assets/photos/login-banner.svg";

export default function LoginPage() {
  return (
    <PageWrapper>
      <div className={styles.absoluteWrapper}>
        <Header isUserLoggedIn={false} />
      </div>
      <div className={styles.wrapper}>
        <Heading img={headingImg} />
        <LoginForm />
      </div>
    </PageWrapper>
  );
}
