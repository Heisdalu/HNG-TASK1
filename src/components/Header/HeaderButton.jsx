import style from "./HeaderButton.module.css";
import dotIcon from "../../../public/assests/Icons/Icon.svg";
import arrowIcon from "../../../public/assests/Icons/Arrow.svg";

const HeaderButton = () => {
  return (
    <button className={style.button}>
      <span className={style.tooltip}>Share Link</span>
      <img src={dotIcon} className={style.dotIcon} alt="" />
      <img src={arrowIcon} className={style.ArrowIcon} alt="share icon" />
    </button>
  );
};

export default HeaderButton;
