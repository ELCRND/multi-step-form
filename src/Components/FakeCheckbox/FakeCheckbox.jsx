import { useDispatch, useSelector } from "react-redux";
import styles from "./FakeCheckbox.module.css";
import { handleYearly } from "../../features/userData/userDataSlice";

const FakeCheckbox = ({ register }) => {
  const plan = useSelector((state) => state.userData.plan);
  const dispatch = useDispatch();
  return (
    <div className={styles.fakeCheckbox__container}>
      <label className={styles.fakeCheckbox__wrapper}>
        <span>Monthly</span>
        <div className={styles.fakeCheckbox}>
          <input
            type="checkbox"
            {...register("yearly")}
            className={styles.checkbox}
            checked={plan.yearly}
            onChange={(e) =>
              dispatch(handleYearly({ value: e.target.checked }))
            }
          />
        </div>
        <span>Yearly</span>
      </label>
    </div>
  );
};

export default FakeCheckbox;
