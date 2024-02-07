import styles from "./Submit.module.css";

const Submit = ({ value, form }) => {
  return (
    <input form={form} className={styles.submit} type="submit" value={value} />
  );
};

export default Submit;
