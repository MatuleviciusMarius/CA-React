export const initialFiles = {
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
    code: `import "./styles.css";`,
  },
};
