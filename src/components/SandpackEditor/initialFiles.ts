export const initialFiles = {
  "/index.html": {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello World</h1>
  <script src="script.js"></script>
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
  "/script.js": {
    code: `console.log("Hello, world!");`,
  },
  "/index.js": {
    code: `import "./script.js";`,
    hidden: true,
  },
};
