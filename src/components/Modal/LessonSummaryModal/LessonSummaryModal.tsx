import { Modal } from "@mui/material";
import styles from "./styles.module.css";
import { CompleteLessonResponse } from "../../../api/lessons";
import SuccessContent from "./SuccessContent";
import TestCheks from "../../TestCheks/TestCheks";

type SuccessfullLessonProp = {
  atempts: number;
  setModalOpen: (status: boolean) => void;
  isOpen: boolean;
  testNames: string[];
  completeResults: CompleteLessonResponse | null;
};

const SuccessfullLesson = ({
  setModalOpen,
  atempts,
  isOpen,
  completeResults,
  testNames,
}: SuccessfullLessonProp) => {
  console.log("completeResults", completeResults);

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
          <SuccessContent setModalOpen={setModalOpen} atempts={atempts} />
        )}
      </div>
    </Modal>
  );
};

export default SuccessfullLesson;
