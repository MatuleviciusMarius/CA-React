import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import styles from "./RegisterForm.module.scss";
import { Box, Button, Link, MenuItem, Select, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { registerUser } from "../../../api/register";
import { UserRegistration } from "../../../types/user";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../router/routes.ts";
import { useState } from "react";
import ErrorParser from "../../../components/ErrorParser/ErrorParser";

type FormData = {
  name: string;
  surname: string;
  email: string;
  country: string;
  occupation: string;
  // phoneNumber: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: Date;
};

const countries = [
  { code: "US", name: "United States" },
  { code: "LT", name: "Lithuania" },
  { code: "GER", name: "Germany" },
];

export default function LoginForm() {
  const navigate = useNavigate();

  const [errors, setErrorsFields] = useState([]);

  const { register, handleSubmit } = useForm<FormData>();

  const { t } = useTranslation();

  async function onSubmit(data: FormData) {
    try {
      const user: UserRegistration = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        occupation: data.occupation,
        country: data.country,
        // phoneNumber: data.phoneNumber,
        password: data.password,
        dateOfBirth: data.dateOfBirth,
      };

      const response = await registerUser(user);

      if (response.status === 201) {
        setErrorsFields([]);
        cookie.set("jwt_token", response.data.jwt_token);
        navigate(RoutePaths.main);
      }
    } catch (err) {
      const error = err as any;
      if (error.response && error.response.status === 400) {
        setErrorsFields(error.response.data.missingFields);
        console.log(error.response.data.missingFields);
      } else {
        console.log(error.response.data.missingFields);
      }
    }
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"start"}
      flexDirection={"column"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1 className={styles.title}>{t("register")}</h1>
        <TextField
          size="medium"
          label={t("name")}
          id="name"
          type="tel"
          {...register("name")}
        />
        <TextField
          size="medium"
          label={t("surname")}
          id="surname"
          type="text"
          {...register("surname")}
        />
        <Select
          id="country"
          {...register("country")}
          displayEmpty
          fullWidth
          defaultValue="LT"
        >
          <MenuItem value="" disabled>
            {t("select_country")}
          </MenuItem>
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          size="medium"
          label={t("occupation")}
          id="occupation"
          type="text"
          {...register("occupation")}
        />
        <TextField
          size="medium"
          id="dateOfBirth"
          type="date"
          label={t("date_of_birth")}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="YYYY-MM-DD"
          {...register("dateOfBirth")}
        />
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
        {/* <TextField
          size="medium"
          label={t("phoneNumber")}
          id="phoneNumber"
          type="number"
          {...register("phoneNumber")}
        /> */}
        <TextField
          size="medium"
          label={t("password")}
          id="password"
          type="password"
          {...register("password")}
        />
        <Button variant="contained" type="submit">
          {t("register")}
        </Button>
        <Link href={RoutePaths.login}>{t("login")}</Link>

        <ErrorParser errors={errors} />
      </form>
    </Box>
  );
}
