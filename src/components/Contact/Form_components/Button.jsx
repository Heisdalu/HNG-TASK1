import style from "./Button.module.css";

const Button = (props) => {
  
  const submit = (e) => {
    e.preventDefault();
    props.submit();
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
