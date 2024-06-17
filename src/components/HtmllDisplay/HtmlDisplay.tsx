import styles from "./HtmlDisplay.module.css";

type HtmlDisplayProps = {
  html: string;
};

export default function HtmlDisplay({ html }: HtmlDisplayProps) {
  return <div className={styles.container} dangerouslySetInnerHTML={{ __html: html }} />;
}
