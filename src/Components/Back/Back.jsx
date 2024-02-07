import { Link } from "react-router-dom";
import styles from "./Back.module.css";

const Back = ({ value, path }) => {
  return (
    <button className={styles.back}>
      <Link to={path}>{value}</Link>
    </button>
  );
};

export default Back;
