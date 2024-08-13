import Editor from "@monaco-editor/react";
import { useEditorContext } from "./EditorContext/EditorContext";

const options = {
  autoIndent: 'full',
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 13,
  lineHeight: 24,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'always',
  minimap: {
    enabled: true,
  },
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
}; 

export default function MonacoCodeEditor() {
  const { dispatch } = useEditorContext();

  function handleEditorChange(value: string | undefined) {
    dispatch({ type: "SET_HTML_CONTENT", payload: value || '' });
  }

  return (
    <>
      <Editor
        height="90vh"
        defaultLanguage="html"
        onChange={handleEditorChange}
        theme="vs-dark"
        beforeMount={(monaco) => {
          monaco.languages.html.htmlDefaults.setOptions({
            suggest: {
              html5: true,
              angular1: false,
              ionic: false,
            },
            data: {
              useDefaultDataProvider: true,
            },
          });
        }}
      />
    </>
  );
}
