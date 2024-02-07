import { useForm } from "react-hook-form";
import styles from "./PersonalInfoForm.module.css";
import Input from "../../../Components/Input/Input";
import { useNavigate } from "react-router-dom";

const PersonalInfoForm = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => nav("/select-plan");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      id={"personalInfo"}
    >
      <Input
        label={"name"}
        type={"text"}
        text={"Name"}
        placeholder={"e.g. Stephen King"}
        register={register}
        required={{ required: true, minLength: 3 }}
        errors={errors}
        errorText={"Minimum 3 characters"}
      ></Input>

      <Input
        label={"email"}
        type={"text"}
        text={"Email Address"}
        placeholder={"e.g. stephenking@mail.com"}
        register={register}
        required={{
          required: true,
          minLength: 5,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        }}
        errors={errors}
        errorText={"example: test@mail.com"}
      />
      <Input
        label={"phone"}
        type={"tel"}
        text={"Phone Number"}
        placeholder={"e.g. +1 234 567 890"}
        register={register}
        required={{ required: true, minLength: 3 }}
        errors={errors}
        errorText={"Minimum 3 characters"}
      />
    </form>
  );
};

export default PersonalInfoForm;
