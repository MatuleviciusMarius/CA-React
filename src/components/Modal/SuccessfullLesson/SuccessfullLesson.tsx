import { Button, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { getStars } from "./stars";

type SuccessfullLessonProp = {
  atempts: number;
  setModalOpen: (status: boolean) => void;
};

const SuccessfullLesson = ({
  setModalOpen,
  atempts,
}: SuccessfullLessonProp) => {
  const starts = getStars(atempts);

  return (
    <div className={styles.wrapper}>
      <Typography
        id="simple-modal-title"
        variant="h6"
        component="h1"
        textAlign="center"
      >
        Great Job!
      </Typography>

      <div className={styles.starsWrapper}>
        {starts.map((star) => (
          <img className={styles.star} src={star} />
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
      </div>
    </div>
  );
};

export default SuccessfullLesson;
