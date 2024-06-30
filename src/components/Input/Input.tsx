import { HTMLProps, forwardRef } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  labelText: string;
  id: string;
  errorMessage?: string;
} & HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, id, errorMessage, ...inputProps }, ref) => {
    return (
      <>
        {labelText && <label htmlFor={id}>{labelText}</label>}
        <input className={styles.input} {...inputProps} ref={ref} />
        {errorMessage && <p>{errorMessage}</p>}
      </>
    );
  }
);

export default Input;
