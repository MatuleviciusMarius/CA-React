import { Button, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { getStars } from "./stars";

type SuccessContentProps = {
  atempts: number;
  setModalOpen: (status: boolean) => void;
};

const SuccessContent = ({ atempts, setModalOpen }: SuccessContentProps) => {
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
      <div className={styles.buttonWrapper}>
        <Button
          variant="contained"
          onClick={() => setModalOpen(false)}
          sx={{ mt: 2 }}
        >
          Close
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={() => setModalOpen(false)}
          sx={{ mt: 2 }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SuccessContent;
