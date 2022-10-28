import style from "./Link.module.css";

const Link = ({ url, title, id }) => {
  return (
    <a
      href={url}
      className={style.link}
      target="_blank"
      id={id}
      rel="noreferrer noopener"
    >
      {title}
    </a>
  );
};

export default Link;
