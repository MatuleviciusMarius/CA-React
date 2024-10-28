import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview } from "@codesandbox/sandpack-react";
import { useInjectStyles } from "./hooks/useInjextStyles";
const editorHeight = "60vh";

const SandpackEditor = () => {
  useInjectStyles();
  return (
    <SandpackLayout style={{ height: editorHeight }}>
      <SandpackFileExplorer autoHiddenFiles style={{ height: editorHeight }} />
      <SandpackCodeEditor style={{ height: editorHeight }} showTabs showLineNumbers wrapContent closableTabs />
      <SandpackPreview showRestartButton showSandpackErrorOverlay showNavigator showOpenInCodeSandbox={false} style={{ height: editorHeight }} />
      {/* <SandpackConsole style={{ height: editorHeight }} /> */}
    </SandpackLayout>
  );
};

export default SandpackEditor;
