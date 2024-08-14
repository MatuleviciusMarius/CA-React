import styles from "./styles.module.css";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={styles.main} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
