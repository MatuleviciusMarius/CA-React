import styles from "./styles.module.css";

type AiResponseBoxProps = {
  message: string;
};

const AiResponseBox = ({ message }: AiResponseBoxProps) => {
  return (
    <div className={`${styles.main} ${message && styles.expanded}`}>
      <div className={message && styles.contentWrapper}>
        <div className={styles.icon}>🤖</div>
        <div className={styles.message}>{message}</div>
      </div>
    </div>
  );
};

export default AiResponseBox;
