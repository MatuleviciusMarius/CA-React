import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { initialFiles } from "./initialFiles";
const editorHeight = "60vh";

const SandpackEditor = () => {
  return (
    <SandpackProvider template="vanilla" theme={"dark"} files={initialFiles} options={{ autorun: true }}>
      <SandpackLayout style={{ height: editorHeight }}>
        <SandpackFileExplorer autoHiddenFiles style={{ height: editorHeight }} />
        <SandpackCodeEditor style={{ height: editorHeight }} showTabs showLineNumbers wrapContent closableTabs />
        <SandpackPreview showRestartButton showSandpackErrorOverlay showNavigator showOpenInCodeSandbox={false} style={{ height: editorHeight }} />
        {/* <SandpackConsole style={{ height: editorHeight }} /> */}
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default SandpackEditor;
