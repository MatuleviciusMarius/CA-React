import { useEditorContext } from "../EditorContext/EditorContext";

export default function CodeRenderer() {
  const { state } = useEditorContext();

  const srcDoc = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${state.cssContent}</style>
  </head>
  <body>
    ${state.htmlContent}
    <script>${state.jsContent}</script>
  </body>
  </html>
`;

  return <iframe srcDoc={srcDoc} style={{ width: "50%", height: "90vh", border: "none" }} title="HTML Preview" />;
}
