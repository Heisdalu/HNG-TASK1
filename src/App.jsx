import Header from "./components/Header/Header";
import style from "./App.module.css";
import LinkSection from "./components/Links/LinkSection";

function App() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <LinkSection />
    </div>
  );
}

export default App;
