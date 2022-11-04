import style from "./FormDetail.module.css";
import Input from "./Input";

const FormDetail = () => {
  return (
    <main className={style.main}>
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
    </main>
  );
};

export default FormDetail;
