import styles from "./PageWrapper.module.scss";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className={styles.main}>{children}</div>;
};

export default PageWrapper;
