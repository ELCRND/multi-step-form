import React from "react";
import CheckBox from "../../../Components/CheckBox/CheckBox";
import { useForm } from "react-hook-form";
import styles from "./AddonsForm.module.css";
import { useNavigate } from "react-router-dom";

const AddonsForm = () => {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = () => nav("/summary");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        id={"add-ons"}
      >
        <div className={styles.addonsList}>
          <CheckBox
            name={"onlineService"}
            text={"Online service"}
            description={"Access to multiplayer games"}
            price={1}
            register={register}
            required={{ required: true }}
          />
          <CheckBox
            name={"largerStorage"}
            text={"Larger storage"}
            description={"Extra 1TB of cloud save"}
            price={2}
            register={register}
            required={{ required: true }}
          />
          <CheckBox
            name={"customizableProfile"}
            text={"Customizable Profile"}
            description={"Custom theme on your profile"}
            price={3}
            register={register}
            required={{ required: true }}
          />
        </div>
      </form>
    </>
  );
};

export default AddonsForm;
