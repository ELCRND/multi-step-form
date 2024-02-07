import styles from "./SubTitle.module.css";

const SubTitle = ({ children }) => {
  return <h1 className={styles.subTitle}>{...children}</h1>;
};

export default SubTitle;
