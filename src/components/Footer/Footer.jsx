import style from "./Footer.module.css";
import zuriLogo from "../../../public/assests/Img/Zuri.Internship_Logo.png";
import IDG from "../../../public/assests/Img/I4G.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <figure className={style.zuriLogo}>
        <img src={zuriLogo} alt="zuri internship logo" />
      </figure>

      <p className={style.footerText}>HNG Internship 9 Frontend Task</p>

      <figure className={style.ingressive}>
        <img src={IDG} alt="ingressive for good logo" />
      </figure>
    </footer>
  );
};

export default Footer;
