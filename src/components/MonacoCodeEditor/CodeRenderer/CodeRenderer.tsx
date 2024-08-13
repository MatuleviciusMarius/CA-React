import { useEditorContext } from "../EditorContext/EditorContext";

export default function CodeRenderer() {
  const { state } = useEditorContext();

  return (
      <iframe srcDoc={state.htmlContent} style={{ width: "50%", height: "90vh", border: "none" }} title="HTML Preview" />
  );
}
