import Footer from "../../components/Footer/Footer";
import style from "./ContactPage.module.css";
import Form from "../../components/Contact/Form";

const ContactPage = () => {
  return (
    <div className={style.formContainer}>
      <Form />
      <Footer />
    </div>
  );
};

export default ContactPage;
