import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <PageWrapper>
      <Header />
      <LoginForm />
    </PageWrapper>
  );
}
