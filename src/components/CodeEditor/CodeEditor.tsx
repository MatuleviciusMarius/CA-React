import { useState } from "react";
import AceEditor from "react-ace";
import styles from "./CodeEditor.module.css";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import HtmlDisplay from "../HtmllDisplay/HtmlDisplay";

const CodeEditor = () => {
  const [value, setValue] = useState("");

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <div>
        <AceEditor
          width="100%"
          mode="html"
          theme="dracula"
          onChange={onChange}
          name="aceEditor"
          editorProps={{ $blockScrolling: true }}
          value={value}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
      <HtmlDisplay html={value} />
    </div>
  );
};

export default CodeEditor;
