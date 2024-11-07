import Header from "../../components/Header/Header";
import PageWrapper from "../../components/PageWrapper";
import RegisterForm from "./RegisterForm";
import styles from "./Register.module.scss";
import Heading from "../../components/Heading/Heading";
import headingImg from "../../assets/photos/rocket.webp";

export default function LoginPage() {
  return (
    <PageWrapper>
      <div className={styles.absoluteWrapper}>
        <Header isUserLoggedIn={false} />
      </div>
      <div className={styles.wrapper}>
        <Heading img={headingImg} />
        <RegisterForm />
      </div>
    </PageWrapper>
  );
}
