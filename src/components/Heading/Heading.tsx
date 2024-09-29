import logo from "../../assets/photos/logo.svg";
import headingImg from "../../assets/photos/login-banner.svg";

import styles from "./styles.module.css";

const Heading = () => {
  return (
    <div className={styles.main}>
      <img className={styles.logo} src={logo} />
      <img src={headingImg} />
    </div>
  );
};

export default Heading;
