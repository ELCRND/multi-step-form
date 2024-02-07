import styles from "./NavigationHOC.module.css";

const NavigationHOC = ({ children }) => {
  return <div className={styles.nav}>{children}</div>;
};

export default NavigationHOC;
