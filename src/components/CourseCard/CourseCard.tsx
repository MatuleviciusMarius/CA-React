import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type CourseCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
};

const CourseCard = ({ id, imgUrl, title, description }: CourseCardProps) => {
  return (
    <Link to={id} className={styles.main}>
      <img src={imgUrl} alt="course photo" />
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default CourseCard;
