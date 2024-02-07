import cn from "classnames";
import styles from "./Radio.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleRadio } from "../../features/userData/userDataSlice";

const Radio = ({ name, value, register, required, price }) => {
  const plan = useSelector((state) => state.userData.plan);

  const dispatch = useDispatch();
  return (
    <label className={cn(styles.plan, styles[value])}>
      <input
        type="radio"
        {...register(name, { ...required })}
        className={styles.checkbox}
        value={value}
        checked={plan.value === value}
        onChange={() => dispatch(handleRadio({ value: value }))}
      />
      <span>{value}</span>
      <span>${plan.yearly ? price * 10 + "/yr" : price + "/mo"}</span>
      {plan.yearly && <span>2 months free</span>}
    </label>
  );
};

export default Radio;
