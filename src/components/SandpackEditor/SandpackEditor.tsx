import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, useActiveCode } from "@codesandbox/sandpack-react";

const editorHeight = "60vh";

const SandpackEditor = () => {
  const { code } = useActiveCode();

  return (
    <SandpackLayout style={{ height: editorHeight }}>
      <SandpackFileExplorer autoHiddenFiles style={{ height: editorHeight }} />
      <SandpackCodeEditor style={{ height: editorHeight }} showTabs showLineNumbers wrapContent closableTabs />
      <SandpackPreview showNavigator showOpenInCodeSandbox={false} style={{ height: editorHeight }} />
    </SandpackLayout>
    // <Sandpack
    //   theme={"dark"}
    //   template="vanilla"
    //   options={{
    //     showLineNumbers: true,
    //     showTabs: true,
    //     showNavigator: true,
    //     editorHeight: "60vh",
    //     classes: {
    //       "sp-preview-actions": "display-none",
    //     },
    //   }}
    //   customSetup={{
    //     entry: "/index.html",
    //   }}
    //   files={files}
    // />
  );
};

export default SandpackEditor;
