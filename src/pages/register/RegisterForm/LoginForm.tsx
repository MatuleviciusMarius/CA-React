import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";
import { Box, Button, Link, TextField } from "@mui/material";
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
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          size="medium"
          label={t("email")}
          id="email"
          type="email"
          {...register("email")}
        />
        <TextField
          size="medium"
          label={t("password")}
          id="password"
          type="password"
          {...register("password")}
        />
        <Button variant="contained" type="submit">
          {t("login")}
        </Button>
        <Link href="#">Register</Link>
      </form>
    </Box>
  );
}
