import Editor from "@monaco-editor/react";
import { useEditorContext } from "./EditorContext/EditorContext";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./MonacoCodeEditor.module.scss";

const editorTypes = {
  html: {
    language: "html",
    defaultValue: "<h1>Hello, World!</h1>",
  },
  css: {
    language: "css",
    defaultValue: "h1 { color: blue; }",
  },
  javascript: {
    language: "javascript",
    defaultValue: 'console.log("Hello, World!");',
  },
};

export default function MonacoCodeEditor() {
  const [selectedEditor, setSelectedEditor] = useState(editorTypes.html);
  const { dispatch } = useEditorContext();

  function handleEditorChange(value: string | undefined) {
    if (selectedEditor.language === editorTypes.html.language) {
      dispatch({ type: "SET_HTML_CONTENT", payload: value || "" });
    } else if (selectedEditor.language === editorTypes.css.language) {
      dispatch({ type: "SET_CSS_CONTENT", payload: value || "" });
    } else if (selectedEditor.language === editorTypes.javascript.language) {
      dispatch({ type: "SET_JS_CONTENT", payload: value || "" });
    }
  }

  const editorRef = useRef<any>(null);

  useEffect(() => {
    editorRef.current?.focus();
  }, [selectedEditor]);

  useEffect(() => {
    dispatch({ type: "SET_HTML_CONTENT", payload: editorTypes.html.defaultValue });
    dispatch({ type: "SET_CSS_CONTENT", payload: editorTypes.css.defaultValue });
    dispatch({ type: "SET_JS_CONTENT", payload: editorTypes.javascript.defaultValue });
  }, [dispatch]);

  return (
    <Box>
      <Box height={"37px"} gap={1} display={"flex"}>
        <Box display={"flex"} className={styles.codeSelectWrapper} width={"100%"}>
          <Button variant="text" disabled={selectedEditor.language === editorTypes.html.language} onClick={() => setSelectedEditor(editorTypes.html)}>
            <Typography variant="caption" color={"white"}>
              index.html
            </Typography>
          </Button>
          <Button variant="text" disabled={selectedEditor.language === editorTypes.css.language} onClick={() => setSelectedEditor(editorTypes.css)}>
            <Typography variant="caption" color={"white"}>
              style.css
            </Typography>
          </Button>
          <Button variant="text" disabled={selectedEditor.language === editorTypes.javascript.language} onClick={() => setSelectedEditor(editorTypes.javascript)}>
            <Typography variant="caption" color={"white"}>
              script.js
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box height={"80vh"}>
        <Editor
          height="100%"
          onMount={(editor) => (editorRef.current = editor)}
          onChange={handleEditorChange}
          theme="vs-dark"
          width={window.innerWidth / 2}
          value={selectedEditor.defaultValue}
          language={selectedEditor.language}
          options={{
            fontSize: 20,
            autoClosingBrackets: "always",
            padding: { top: 10 },
            bracketPairColorization: {
              enabled: true,
            },
            letterSpacing: 1,
          }}
        />
      </Box>
    </Box>
  );
}
