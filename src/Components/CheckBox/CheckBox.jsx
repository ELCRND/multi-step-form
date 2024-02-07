import { useDispatch, useSelector } from "react-redux";
import styles from "./CheckBox.module.css";
import { handleCheckbox } from "../../features/userData/userDataSlice";

const CheckBox = ({ name, text, description, price, register }) => {
  const addons = useSelector((state) => state.userData.addons);
  const dispatch = useDispatch();
  return (
    <label className={styles.addon}>
      <input
        type="checkbox"
        className={styles.checkbox}
        {...register(name)}
        onChange={(e) =>
          dispatch(handleCheckbox({ name, value: e.target.checked }))
        }
        checked={addons[name]}
      />
      <div className={styles.info}>
        <span className={styles.info__name}>{text}</span>
        <span className={styles.info__description}>{description}</span>
      </div>
      <span className={styles.price}>+${price}/mo</span>
    </label>
  );
};

export default CheckBox;
