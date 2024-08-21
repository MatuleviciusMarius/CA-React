import { Box, Button } from "@mui/material";
import { useEditorContext } from "../EditorContext/EditorContext";
import { useTranslation } from "react-i18next";
import { completeLesson } from "../../../api/lessons";

export default function CodeRenderer() {
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
  completeLesson()
}

  return (
    <Box flexGrow={1} height={"80vh"}>
      <Box display={"flex"} gap={1} justifyContent={"right"}>
        <Button variant="outlined">{t("aiHelp")}</Button>
        <Button onClick={handleComplete} variant="contained" color="success">
          {t("complete")}
        </Button>
      </Box>
      <iframe
        srcDoc={srcDoc}
        style={{ width: "100%", border: "none", height: "100%" }}
        title="HTML Preview"
      />
    </Box>
  );
}
