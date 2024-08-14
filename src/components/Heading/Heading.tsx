import headingImg from "../../assets/photos/heading.webp";
import styles from "./styles.module.css";

const Heading = () => {
  return (
    <div className={styles.main}>
      <img src={headingImg} />
    </div>
  );
};

export default Heading;
