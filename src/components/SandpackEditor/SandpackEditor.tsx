import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { useInjectStyles } from "./hooks/useInjextStyles";
import styles from "./SandpackEditor.module.scss";
const editorHeight = "60vh";

const SandpackEditor = () => {
  useInjectStyles();
  return (
    <SandpackLayout style={{ height: editorHeight }}>
      <SandpackFileExplorer
        autoHiddenFiles
        className={styles.editor}
        style={{ height: editorHeight }}
      />
      <SandpackCodeEditor
        style={{ height: editorHeight }}
        showTabs
        showLineNumbers
        wrapContent
        closableTabs
      />
      <SandpackPreview
        showRestartButton
        showSandpackErrorOverlay
        showNavigator
        showOpenInCodeSandbox={false}
        style={{ height: editorHeight }}
      />
      {/* <SandpackConsole style={{ height: editorHeight }} /> */}
    </SandpackLayout>
  );
};

export default SandpackEditor;
