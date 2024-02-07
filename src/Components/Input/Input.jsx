import { useDispatch, useSelector } from "react-redux";
import styles from "./Input.module.css";
import { handleInput } from "../../features/userData/userDataSlice";

const Input = ({
  label,
  text,
  register,
  required,
  type,
  errors,
  errorText,
  placeholder,
}) => {
  const data = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor={label} className={styles.label}>
        {errors[label] && <span className={styles.error}>{errorText}</span>}
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          className={styles.input}
          autoComplete="off"
          {...register(label, { ...required })}
          value={data[label]}
          onChange={(e) =>
            dispatch(handleInput({ value: e.target.value, name: label }))
          }
        />
        <span className={styles.label__name}>{text}</span>
      </label>
    </>
  );
};

export default Input;
