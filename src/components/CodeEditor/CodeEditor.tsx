import { useState } from "react";
import AceEditor from "react-ace";
import styles from "./CodeEditor.module.scss";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-chaos";
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
          height="100vh"
          mode="html"
          theme="chaos"
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
