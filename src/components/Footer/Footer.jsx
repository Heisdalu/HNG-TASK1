import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <figure className={style.zuriLogo}>
        <img
          src="../../../public/assests/Img/Zuri.Internship_Logo.png"
          alt=""
        />
      </figure>

      <p className={style.footerText}>HNG Internship 9 Frontend Task</p>

      <figure className={style.ingressive}>
        <img src="../../../public/assests/Img/I4G.png" alt="" />
      </figure>
    </footer>
  );
};

export default Footer;
