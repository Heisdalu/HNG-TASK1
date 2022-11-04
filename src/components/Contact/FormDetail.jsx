import Button from "./Form_components/Button";
import Checkbox from "./Form_components/Checkbox";
import style from "./FormDetail.module.css";
import Input from "./Form_components/Input";
import TextArea from "./Form_components/TextArea";

const FormDetail = () => {
  return (
    <main className={style.main}>
      <form className={style.form}>
        <Input
          id="first_name"
          label="First name"
          type="text"
          placeholder="Enter your first name"
        />
        <Input
          id="last_name"
          label="Last name"
          type="text"
          placeholder="Enter your last name"
        />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="yourname@email.com"
        />

        <TextArea />
        <Checkbox />
        <Button />
      </form>
    </main>
  );
};

export default FormDetail;
