import style from "./Checkbox.module.css";

const Checkbox = () => {
  return (
    <div className={style.checkbox}>
      <input
        type="checkbox"
        id="checkbox"
        className={style["checkBox__input"]}
      />
      <label htmlFor="checkbox" className={style.checkBoxLabel}>
        You agree to providing your data to Divine who may contact you.
      </label>
    </div>
  );
};

export default Checkbox;
