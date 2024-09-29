import styles from "./styles.module.css";

type SkillProp = {
  title: string;
};

const Skill = ({ title }: SkillProp) => {
  return <div className={styles.wrapper}>{title}</div>;
};

export default Skill;
