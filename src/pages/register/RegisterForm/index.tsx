import { useForm } from "react-hook-form";
import styles from "./RegisterForm.module.scss";
import { Box, Button, Link, MenuItem, Select, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

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
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  // Add more countries as needed
];

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
        <Select id="country" {...register("country")} displayEmpty fullWidth>
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
          {...register("email")}
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
