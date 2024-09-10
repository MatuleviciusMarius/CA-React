import { Box, Button } from "@mui/material";
import { useEditorContext } from "../EditorContext/EditorContext";
import { useTranslation } from "react-i18next";
import { completeLesson, CompleteLessonModel, getAiHelp } from "../../../api/lessons";
import { useState } from "react";

type CodeRendererProps = {
  lessonId: string;
  userId: string;
};

export default function CodeRenderer({ lessonId, userId }: CodeRendererProps) {
  const [aiResponse, setAiResponse] = useState("");
  const { state } = useEditorContext();
  const { t } = useTranslation();

  const srcDoc = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${state.cssContent}</style>
  </head>
  <body>
    ${state.htmlContent}
    <script>${state.jsContent}</script>
  </body>
  </html>
`;

  const handleComplete = () => {
    const body: CompleteLessonModel = {
      userId,
      code: srcDoc,
    };

    completeLesson(lessonId, body);
  };

  const handleGetAiHelp = async () => {
    const response = await getAiHelp(lessonId, srcDoc);
    setAiResponse(response);
  };

  return (
    <Box flexGrow={1} height={"80vh"}>
      <p>{aiResponse}</p>
      <Box display={"flex"} gap={1} justifyContent={"right"}>
        <Button onClick={handleGetAiHelp} variant="outlined">
          {t("aiHelp")}
        </Button>
        <Button onClick={handleComplete} variant="contained" color="success">
          {t("complete")}
        </Button>
      </Box>
      <iframe srcDoc={srcDoc} style={{ width: "100%", border: "none", height: "100%" }} title="HTML Preview" />
    </Box>
  );
}
