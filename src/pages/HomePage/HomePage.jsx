import Header from "../../components/Header/Header";
import LinkSection from "../../components/Links/LinkSection";
import Footer from "../../components/Footer/Footer";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <Header />
        <LinkSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
