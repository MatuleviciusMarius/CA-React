import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <PageWrapper>
      <Header isHideLogo={true} />
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <Heading />
        </div>
        <div className={styles.second}>
          <LoginForm />
        </div>
      </div>
    </PageWrapper>
  );
}
