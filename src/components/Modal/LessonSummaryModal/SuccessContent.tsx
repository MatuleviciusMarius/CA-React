import { Typography } from "@mui/material";
import styles from "./styles.module.css";
import { getStars } from "./stars";

type SuccessContentProps = {
  atempts: number;
  setModalOpen: (status: boolean) => void;
};

const SuccessContent = ({ atempts }: SuccessContentProps) => {
  const starts = getStars(atempts);

  return (
    <div>
      <Typography
        id="simple-modal-title"
        variant="h6"
        component="h1"
        textAlign="center"
      >
        Great Job!
      </Typography>
      <div className={styles.starsWrapper}>
        {starts.map((star, idx) => (
          <img className={styles.star} src={star} key={idx} />
        ))}
      </div>
      <Typography
        id="simple-modal-description"
        sx={{ mt: 2 }}
        textAlign="center"
      >
        This is a simple modal example.
      </Typography>
    </div>
  );
};

export default SuccessContent;
