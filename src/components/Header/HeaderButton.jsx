import style from "./HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <button className={style.button}>
      <span className={style.tooltip}>Share Link</span>
      <img
        src="../../../public/assests/Icons/Icon.svg"
        className={style.dotIcon}
        alt=""
      />
      <img
        src="../../../public/assests/Icons/Arrow.svg"
        className={style.ArrowIcon}
        alt="share icon"
      />
    </button>
  );
};

export default HeaderButton;
