import { Button } from "@mui/material";
import {
  completeLesson,
  CompleteLessonModel,
  CompleteLessonResponse,
  getTestNames,
} from "../../../api/lessons";
import { useCurrentCode } from "../../SandpackEditor/hooks/useCurrentCode";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LessonSummaryModal from "../../Modal/LessonSummaryModal/LessonSummaryModal";

type CompleteProps = {
  userId: string;
  lessonId: string;
  courseId: string;
  nextLessonId: string;
};

const Complete = ({
  lessonId,
  userId,
  courseId,
  nextLessonId,
}: CompleteProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testNames, setTestNames] = useState<string[]>([]);
  const [completeResults, setCompleteResults] =
    useState<CompleteLessonResponse | null>(null);

  const { t } = useTranslation();
  const code = useCurrentCode();

  const fetchTestNames = async () => {
    try {
      const res = await getTestNames(lessonId);
      setTestNames(res.data.map((test) => test.en));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTestNames();
  }, []);

  const handleComplete = async () => {
    setCompleteResults(null);
    setIsModalOpen(true);
    const body: CompleteLessonModel = {
      userId,
      lessonId,
      courseId,
      code,
    };

    const res = await completeLesson(lessonId, body);
    setCompleteResults(res.data);
  };

  return (
    <>
      <Button onClick={handleComplete} variant="contained" color="success">
        {t("complete")}
      </Button>

      <LessonSummaryModal
        nextLessonLink={`/lesson/${nextLessonId}`}
        isOpen={isModalOpen}
        setModalOpen={() => {
          setIsModalOpen(false);
        }}
        testNames={testNames}
        completeResults={completeResults}
        userId={userId}
        lessonId={lessonId}
        courseId={courseId}
      />
    </>
  );
};

export default Complete;
