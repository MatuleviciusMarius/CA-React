import { Typography } from "@mui/material";
import styles from "./styles.module.css";
import { getStars } from "./stars";
import { useEffect, useState } from "react";
import { getProgress } from "../../../api/progress";

type SuccessContentProps = {
  lessonId: string;
  userId: string;
  courseId: string;
};

const SuccessContent = ({ lessonId, userId, courseId }: SuccessContentProps) => {
  const [atempts, setAttempts] = useState(null);

  const starts = getStars(atempts);

  const fetchProgress = async () => {
    const fetchedProgress = await getProgress({
      lessonId,
      userId,
      courseId,
    });
    setAttempts(fetchedProgress.data.progress.attemptsCount);
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <div>
      {starts && (
        <>
          <Typography id="simple-modal-title" variant="h6" component="h1" textAlign="center">
            Great Job!
          </Typography>
          <div className={styles.starsWrapper}>
            {starts.map((star, idx) => (
              <img className={styles.star} src={star} key={idx} />
            ))}
          </div>
          <Typography id="simple-modal-description" sx={{ mt: 2 }} textAlign="center">
            This is a simple modal example.
          </Typography>
        </>
      )}
    </div>
  );
};

export default SuccessContent;
