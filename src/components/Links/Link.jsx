import style from "./Link.module.css";

const Link = ({ url, title, id, info }) => {
  return (
    <a
      href={url}
      title={info}
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
