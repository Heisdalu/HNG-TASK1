import Header from "./components/Header/Header";
import style from "./App.module.css";
import LinkSection from "./components/Links/LinkSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <LinkSection />
      <Footer />
    </div>
  );
}

export default App;
