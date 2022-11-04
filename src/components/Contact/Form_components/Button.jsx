import style from "./Button.module.css";

const Button = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <button
      type="submit"
      id="btn__submit"
      className={style.button}
      onClick={submit}
    >
      Send message
    </button>
  );
};

export default Button;
