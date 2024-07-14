import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";
import { Box, Button, Container, TextField } from "@mui/material";

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
      <Container maxWidth={"sm"}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <TextField label={"Email"} id="email" type="email" {...register("email", { required: "Email is required" })} />
          <TextField label={"Password"} id="password" type="password" {...register("password", { required: "Password is required" })} />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Container>
    </Box>
  );
}
