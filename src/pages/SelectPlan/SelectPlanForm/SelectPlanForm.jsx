import { useForm } from "react-hook-form";
import styles from "./SelectPlanForm.module.css";
import Radio from "../../../Components/Radio/Radio";
import FakeCheckbox from "../../../Components/FakeCheckbox/FakeCheckbox";
import { useNavigate } from "react-router-dom";

const SelectPlanForm = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = () => nav("/addons");
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        id={"selectPlan"}
      >
        <div className={styles.plansList}>
          <Radio
            name={"plans"}
            value={"arcade"}
            price={9}
            register={register}
            required={{ required: true }}
          />
          <Radio
            name={"plans"}
            value={"advanced"}
            price={12}
            register={register}
            required={{ required: true }}
          />
          <Radio
            name={"plans"}
            value={"pro"}
            price={15}
            register={register}
            required={{ required: true }}
          />
        </div>
        {errors.plans && (
          <span className={styles.error}>You need to choose a plan</span>
        )}
        <FakeCheckbox name={"yearly"} register={register} />
      </form>
    </>
  );
};

export default SelectPlanForm;
