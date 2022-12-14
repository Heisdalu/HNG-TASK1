import style from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import Anette_Pic from "../../../public/assests/Img/Divine_Obi.png";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <HeaderButton />
      <header className={style.header}>
        <figure className={style.profileContainer}>
          <span className={style.hoverProfile}></span>
          <img
            src={Anette_Pic}
            className={style.profile_pic}
            alt="divine obi Selfie"
            id="profile__img"
          />
        </figure>
        <h1 className={style.headerTitle}>Divine Obi</h1>
        <p id="slack" className={style.slack}>
          Dalu
        </p>
      </header>
    </div>
  );
};

export default Header;
