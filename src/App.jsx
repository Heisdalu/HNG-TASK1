import Header from "./components/Header/Header";
import style from "./App.module.css";
import LinkSection from "./components/Links/LinkSection";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className={style.mainContainer}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
