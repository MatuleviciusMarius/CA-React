import { useForm } from "react-hook-form";
import styles from "./RegisterForm.module.scss";
import { Box, Button, Link, MenuItem, Select, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { registerUser } from "../../../api/register";
import { UserRegistration } from "../../../types/user";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  surname: string;
  email: string;
  country: string;
  occupation: string;
  phoneNumber: string;
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

  const { register, handleSubmit } = useForm<FormData>();

  const { t } = useTranslation();

  async function onSubmit(data: FormData) {
    const user: UserRegistration = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      occupation: data.occupation,
      country: data.country,
      phoneNumber: data.phoneNumber,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
    };

    const response = await registerUser(user);

    if (response.status === 200) {
      navigate("/");
    }
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          defaultValue="US"
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
        <TextField
          size="medium"
          label={t("phoneNumber")}
          id="phoneNumber"
          type="number"
          {...register("phoneNumber")}
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
