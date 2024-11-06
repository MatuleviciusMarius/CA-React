// import logo from "../../assets/photos/logo.svg";
import { Paper } from "@mui/material";

import styles from "./styles.module.css";

type HeadingType = {
  img: string;
};

const Heading = ({ img }: HeadingType) => {
  return (
    <Paper elevation={3} className={styles.paper}>
      <img src={img} />
    </Paper>
  );
};

export default Heading;
