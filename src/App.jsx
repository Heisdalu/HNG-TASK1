import style from "./App.module.css";
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
    </div>
  );
}

export default App;
