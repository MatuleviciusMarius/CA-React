import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { initialFiles } from "./initialFiles";
import { useState } from "react";

const editorHeight = "60vh";

const SandpackEditor = () => {
  // const { code } = useActiveCode();

  return (
    <div>
      <SandpackProvider template="vanilla" theme={"dark"} files={initialFiles} options={{ autorun: false }}>
        <SandpackLayout style={{ height: editorHeight }}>
          <SandpackFileExplorer autoHiddenFiles style={{ height: editorHeight }} />
          <SandpackCodeEditor initMode="lazy" style={{ height: editorHeight }} showTabs showLineNumbers wrapContent closableTabs />
          <SandpackPreview showRestartButton showSandpackErrorOverlay showNavigator showOpenInCodeSandbox={false} style={{ height: editorHeight }} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default SandpackEditor;
