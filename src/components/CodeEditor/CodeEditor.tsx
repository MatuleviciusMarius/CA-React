import { useState } from "react";
import AceEditor from "react-ace";
import styles from "./CodeEditor.module.scss";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-chaos";
import HtmlDisplay from "./HtmllDisplay/HtmlDisplay";
import { Tab, Tabs } from "@mui/material";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.container}>
      <div>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="HTML" />
          <Tab label="CSS" />
        </Tabs>
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
            fontFamily: "Fira Code",
            fontSize: "14px",
            tabSize: 2,
          }}
        />
      </div>
      <HtmlDisplay html={value} />
    </div>
  );
};

export default CodeEditor;
