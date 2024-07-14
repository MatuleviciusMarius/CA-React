import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";
import { Box, Button, TextField } from "@mui/material";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField size="small" label={"Email"} id="email" type="email" {...register("email", { required: "Email is required" })} />
        <TextField size="small" label={"Password"} id="password" type="password" {...register("password", { required: "Password is required" })} />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}
