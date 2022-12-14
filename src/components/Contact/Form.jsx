import style from "./Form.module.css";
import FormDetail from "./FormDetail";
import FormHeader from "./Form_components/FormHeader";

const Form = () => {
  return (
    <div className={style.formContainer}>
      <FormHeader />
      <FormDetail />
    </div>
  );
};

export default Form;
