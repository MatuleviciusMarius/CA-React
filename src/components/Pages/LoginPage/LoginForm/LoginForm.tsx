import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const { t } = useTranslation();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
      <Typography variant="h4">{t("greetings.hello")}</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          size="small"
          label={"Email"}
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        <TextField
          size="small"
          label={"Password"}
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}
