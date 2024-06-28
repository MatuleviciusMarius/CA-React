import { useForm } from "react-hook-form";
import Input from "../../../Input/Input";
import styles from "./LoginForm.module.scss";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input id="email" labelText="Username" type="email" {...register("email", { required: "Email is required" })} errorMessage={errors.email?.message} />
      <Input id="password" labelText="Password" type="password" {...register("password", { required: "Password is required" })} />
      <button type="submit">Login</button>
    </form>
  );
}
