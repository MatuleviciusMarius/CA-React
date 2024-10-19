import { Sandpack } from "@codesandbox/sandpack-react";

const files = {
  "/index.html": {
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>My Sandpack</title>
    <link rel="stylesheet" type="text/css" href="/styles.css">
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
    active: true,
  },
  "/styles.css": {
    code: `body {
  background-color: lightblue;
}

h1 {
  color: navy;
  text-align: center;
}`,
  },
  "/index.js": {
    code: "",
  },
};

const SandpackEditor = () => {
  return (
    <Sandpack
      theme={"dark"}
      template="vanilla"
      options={{
        showLineNumbers: true,
        showTabs: true,
        showNavigator: true,
        editorHeight: "60vh",
        classes: {
          "sp-preview-actions": "display-none",
        },
      }}
      customSetup={{
        entry: "/index.html",
      }}
      files={files}
    />
  );
};

export default SandpackEditor;
