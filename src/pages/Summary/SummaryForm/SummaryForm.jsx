import { useNavigate } from "react-router-dom";
import styles from "./SummaryForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { handleYearly } from "../../../features/userData/userDataSlice";

const prices = {
  plans: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  addons: {
    onlineService: 1,
    largerStorage: 1,
    customizableProfile: 2,
  },
};

const SummaryForm = () => {
  const nav = useNavigate();
  const data = useSelector((state) => state.userData);
  const yearly = data.plan.yearly;
  const plan = prices.plans[data.plan.value];

  const total =
    (yearly ? plan * 10 : plan) +
    Object.entries(data.addons)
      .filter((d) => d[1])
      .reduce(
        (a, c) =>
          yearly ? a + prices.addons[c[0]] * 10 : a + prices.addons[c[0]],
        0
      );
  const dispatch = useDispatch();
  const onSubmit = () => {
    localStorage.setItem("data", JSON.stringify(data));
    nav("/finish");
  };
  const { handleSubmit } = useForm();
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      id={"finish"}
    >
      <div className={styles.wrapper}>
        <div className={styles.plan}>
          <span>{`${data.plan.value} (${yearly ? "Yearly" : "Monthly"})`}</span>
          <button
            type="button"
            onClick={() => dispatch(handleYearly({ value: !yearly }))}
          >
            Change
          </button>
          <span>${`${yearly ? plan * 10 + "/yr" : plan + "/mo"}`}</span>
        </div>
        <div className={styles.addons}>
          {Object.entries(data.addons)
            .filter((addon) => addon[1])
            .map((addon) => (
              <span key={addon}>
                {addon[0]}
                <span>
                  +$
                  {`${
                    yearly
                      ? prices.addons[addon[0]] * 10 + "/yr"
                      : prices.addons[addon[0]] + "/mo"
                  }`}
                </span>
              </span>
            ))}
        </div>
      </div>
      <span className={styles.total}>
        Total (per {yearly ? "year" : "month"})
        <span>
          ${total}
          {yearly ? "/yr" : "/mo"}
        </span>
      </span>
    </form>
  );
};

export default SummaryForm;
