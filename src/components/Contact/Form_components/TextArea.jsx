import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import style from "./TextArea.module.css";

const TextArea = ({ submitted }) => {
  const [error, setError] = useState(false);
  const textAreaRef = useRef();

  const validate = (e) => {
    const value = textAreaRef.current.value.trim();
    if (!value) {
      setError(true);
    }
  };

  const onchange = (e) => {
    const value = textAreaRef.current.value.trim();
    if (value) {
      setError(false);
    }
  };

  useEffect(() => {
    const value = textAreaRef.current.value.trim();
    if (submitted && !value) {
      setError(true);
    }
  }, [submitted]);

  return (
    <div className={style.textAreaBox}>
      <label htmlFor="message">Message</label>
      <textarea
        onBlur={validate}
        onChange={onchange}
        name="message"
        id="message"
        className={`${style.textArea} ${error && style.error}`}
        placeholder="Send me a message and I'll reply you as soon as possible..."
        ref={textAreaRef}
      ></textarea>
      {error && (
        <span className={style.errorMessage}>Please enter a message</span>
      )}
    </div>
  );
};

export default TextArea;
