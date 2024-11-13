import {
  Box,
  Button,
  CircularProgress,
  List,
  Modal,
  Typography,
} from "@mui/material";
import {
  completeLesson,
  CompleteLessonModel,
  CompleteLessonResponse,
  getTestNames,
} from "../../../api/lessons";
import { useCurrentCode } from "../../SandpackEditor/hooks/useCurrentCode";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type CompleteProps = {
  userId: string;
  lessonId: string;
};

const Complete = ({ lessonId, userId }: CompleteProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testNames, setTestNames] = useState<string[]>([]);
  const [completeResults, setCompleteResults] = useState<CompleteLessonResponse | null>(null)

  const { t } = useTranslation();
  const code = useCurrentCode();

  const fetchTestNames = async () => {
    try {
      const res = await getTestNames(lessonId);
      console.log(res.data);

      setTestNames(res.data.map((test) => test.en));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTestNames();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleComplete = async () => {
    setIsModalOpen(true);
    const body: CompleteLessonModel = {
      userId,
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
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Running tests:
          </Typography>
          <List>
            {
              completeResults ? (
                completeResults.map((result, i) => (
                  <Typography key={i}>
                    {result.result ? "✅" : "❌"} {result.name.en} 
                  </Typography>
                ))
              ) : (
                testNames?.map((name, i) => (
                  <Typography key={i}>
                    <CircularProgress size={15} /> {name}
                  </Typography>
                ))
              )
            }
          </List>
        </Box>
      </Modal>
    </>
  );
};

export default Complete;
