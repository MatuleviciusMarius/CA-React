import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <PageWrapper>
      <Header />
      <Heading />
      <LoginForm />
    </PageWrapper>
  );
}
