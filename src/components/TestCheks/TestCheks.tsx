import { Box, CircularProgress, List, Typography } from "@mui/material";
import { CompleteLessonResponse } from "../../api/lessons";
import styles from "./styles.module.css";

type TestCheksProps = {
  completeResults: CompleteLessonResponse | null;
  testNames: string[];
};

const TestCheks = ({ completeResults, testNames }: TestCheksProps) => {
  return (
    <Box className={styles.tests}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Running tests:
      </Typography>
      <List>
        {completeResults
          ? completeResults.map((result, i) => (
              <Typography key={i}>
                {result.result ? "✅" : "❌"} {result.name.en}
              </Typography>
            ))
          : testNames?.map((name, i) => (
              <Typography key={i}>
                <CircularProgress size={15} /> {name}
              </Typography>
            ))}
      </List>
    </Box>
  );
};

export default TestCheks;
