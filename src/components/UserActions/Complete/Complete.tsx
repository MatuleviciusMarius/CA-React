import { Box, Button, CircularProgress, List, Modal, Typography } from "@mui/material";
import { completeLesson, CompleteLessonModel, getTestNames } from "../../../api/lessons";
import { useCurrentCode } from "../../SandpackEditor/hooks/useCurrentCode";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";

type CompleteProps = {
  userId: string;
  lessonId: string;
};

const Complete = ({ lessonId, userId } : CompleteProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testNames, setTestNames] = useState<string[]>([]);
  
  const { t } = useTranslation();
  const code = useCurrentCode();

  useEffect(() => {
    const fetchTestNames = async () => {
      const res = await getTestNames(lessonId);
      console.log(res.data.testNames);
      
      setTestNames(res.data.testNames);
    };

    fetchTestNames();
  }, [lessonId]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
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
    console.log(res.data);
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
      
      {testNames.map((name, i) => (
        <Typography key={i}><CircularProgress size={15}/> {name}</Typography>
      ))}
    </List>
  </Box>
</Modal>
    </>
  );
}

export default Complete;