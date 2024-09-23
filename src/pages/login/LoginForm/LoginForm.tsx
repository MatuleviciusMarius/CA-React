import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import styles from "./LoginForm.module.scss";
import { Box, Button, Link, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { login } from "../../../api/login";
import { UserLogin } from "../../../types/user";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../router/routes";
import { useState } from "react";

export default function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<UserLogin>();
  const [errorMessage, setErrorMessage] = useState("");

  const { t } = useTranslation();

  async function onSubmit(data: UserLogin) {
    try {
      const response = await login(data);

      if (response.status === 200) {
        cookie.set("jwt_token", response.data.jwt_token);
        navigate(RoutePaths.main);
      }

      if (response.status === 401) {
        console.log("asas");
        setErrorMessage("Inserted bad email or password");
      }
    } catch (e: any) {
      if (e.response.status === 401) {
        console.log("asas");
        setErrorMessage("Inserted bad email or password");
      }
    }
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
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <TextField
          size="medium"
          label={t("password")}
          id="password"
          type="password"
          {...register("password")}
        />
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <Button variant="contained" type="submit">
          {t("login")}
        </Button>
        <Link href={RoutePaths.register}>{t("register")}</Link>
      </form>
    </Box>
  );
}
