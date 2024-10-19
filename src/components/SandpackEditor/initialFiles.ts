export const initialFiles = {
  "/index.html": {
    code: `<h1>Hello World</h1>`,
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
    code: `import "./styles.css"; import "./script.js";`,
    hidden: true,
  },
};
