import { useSandpack } from "@codesandbox/sandpack-react";

export type Code = {
  html: string;
  css: string;
  js: string;
};

export const useCurrentCode = () => {
  const { sandpack } = useSandpack();

  const code: Code = {
    html: sandpack?.files["/index.html"].code,
    css: sandpack?.files["/styles.css"].code,
    js: sandpack?.files["/script.js"].code,
  };

  return code;
};
