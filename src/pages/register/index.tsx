import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./RegisterForm";
// import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <PageWrapper>
      <Header />
      <LoginForm />
    </PageWrapper>
  );
}
