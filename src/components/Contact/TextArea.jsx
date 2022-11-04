import style from "./TextArea.module.css";

const TextArea = () => {
  return (
    <div className={style.textAreaBox}>
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Send me a message and I'll reply you as soon as possible..."
      ></textarea>
    </div>
  );
};

export default TextArea;
