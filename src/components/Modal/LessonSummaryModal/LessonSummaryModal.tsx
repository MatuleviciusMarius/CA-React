import { Button, Modal } from "@mui/material";
import styles from "./styles.module.css";
import { CompleteLessonResponse } from "../../../api/lessons";
import SuccessContent from "./SuccessContent";
import TestCheks from "../../TestCheks/TestCheks";
import { useNavigate } from "react-router";

type SuccessfullLessonProp = {
  setModalOpen: (status: boolean) => void;
  isOpen: boolean;
  testNames: string[];
  completeResults: CompleteLessonResponse | null;
  nextLessonLink: string;
  userId: string;
  lessonId: string;
  courseId: string;
};

const SuccessfullLesson = ({
  setModalOpen,
  isOpen,
  completeResults,
  testNames,
  nextLessonLink,
  userId,
  lessonId,
  courseId,
}: SuccessfullLessonProp) => {
  const navigate = useNavigate();

  const isEveryTestPassed = completeResults?.every((c) => c.result);

  return (
    <Modal
      open={isOpen}
      onClose={setModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.wrapper}>
        <TestCheks completeResults={completeResults} testNames={testNames} />

        {isEveryTestPassed && (
          <SuccessContent
            userId={userId}
            lessonId={lessonId}
            courseId={courseId}
          />
        )}

        <div className={styles.buttonWrapper}>
          <Button
            variant="contained"
            onClick={() => setModalOpen(false)}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
          {isEveryTestPassed && (
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                setModalOpen(false);
                navigate(nextLessonLink);
              }}
              sx={{ mt: 2 }}
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SuccessfullLesson;
