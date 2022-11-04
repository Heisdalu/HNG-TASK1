import style from "./Form.module.css";
import FormDetail from "./FormDetail";
import FormHeader from "./FormHeader";

const Form = () => {
  return (
    <div className={style["form__container"]}>
          <FormHeader />
          <FormDetail />
    </div>
  );
};

export default Form;
