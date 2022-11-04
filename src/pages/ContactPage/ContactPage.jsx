import Footer from "../../components/Footer/Footer";
import style from "./ContactPage.module.css";
import Form from "../../components/Contact/Form";

const ContactPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className={style.formContainer}>
      <Form />
      <Footer />
    </div>
  );
};

export default ContactPage;
