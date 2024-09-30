// import logo from "../../assets/photos/logo.svg";
import { Paper } from "@mui/material";
import headingImg from "../../assets/photos/login-banner.svg";

import styles from "./styles.module.css";

const Heading = () => {
  return (
    <Paper elevation={3} className={styles.paper}>
      <img src={headingImg} />
    </Paper>
  );
};

export default Heading;
