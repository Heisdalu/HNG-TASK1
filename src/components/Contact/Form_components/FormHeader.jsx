import style from "./FormHeader.module.css";

const FormHeader = () => {
  return (
    <header className={style.header}>
      <h1 className={style.headerTitle}>Contact Me</h1>
      <p className={style.headerText}>
        Hi there, contact me to ask me about anything you have in mind.
      </p>
    </header>
  );
};

export default FormHeader;
