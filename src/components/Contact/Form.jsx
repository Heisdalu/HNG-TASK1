import style from "./Form.module.css";
import FormHeader from "./FormHeader";

const Form = () => {
  return (
    <div className={style["form__container"]}>
      <FormHeader />
    </div>
  );
};

export default Form;
