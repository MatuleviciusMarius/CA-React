import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { useEffect } from "react";

export const useInjectStyles = () => {
  const { code } = useActiveCode();
  const { sandpack } = useSandpack();

  useEffect(() => {
    if (sandpack.activeFile === "/index.html") {
      const regex = /<head[^>]*>.*?<link[^>]*href=["']styles\.css["'][^>]*>.*?<\/head>/s;
      const hasLinkForStyles = regex.test(code);
      if (hasLinkForStyles) {
        // check if the styles.css file is already imported
        const stylesAlreadyThere = sandpack.files["/index.js"].code.includes(`import "./styles.css";`)
        if (!stylesAlreadyThere) {
          sandpack.files["/index.js"].code += `import "./styles.css";`;          
        }
      } else {
        const regex = /import\s+["']\.\/styles\.css["'];/;
        const stylesAlreadyThere = regex.test(sandpack.files["/index.js"].code)
        console.log(stylesAlreadyThere);
        
        if (stylesAlreadyThere) {
          sandpack.files["/index.js"].code = sandpack.files["/index.js"].code.replace(`import "./styles.css";`, "");          
        }
      }
    }
  }, [code, sandpack.activeFile, sandpack.files])
}