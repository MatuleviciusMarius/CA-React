import { HTMLProps, forwardRef } from "react";

type InputProps = {
  labelText: string;
  id: string;
  errorMessage?: string;
} & HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ labelText, id, errorMessage, ...inputProps }, ref) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input {...inputProps} ref={ref}/>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
});

export default Input;