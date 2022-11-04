import style from "./Input.module.css";

const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className={style.inputBox}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={style.input}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
