import { useLocation } from "react-router-dom";
import styles from "./Step.module.css";
import cn from "classnames";
const Step = ({ num, title, info, id }) => {
  const { pathname } = useLocation();
  return (
    <li className={styles.step}>
      <span
        id={id}
        className={cn(
          styles.step__num,
          "/" + id === pathname && styles.step__num_active
        )}
      >
        {num}
      </span>
      <span className={styles.step__title}>{title}</span>
      <span className={styles.step__info}>{info}</span>
    </li>
  );
};

export default Step;
