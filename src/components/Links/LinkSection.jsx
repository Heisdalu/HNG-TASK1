import DevLink from "./Link";
import style from "./LinkSection.module.css";
import slack from "../../../public/assests/Img/slack.png";
import github from "../../../public/assests/Icons/github.svg";

const LinkSection = () => {
  return (
    <nav className={style.navigationLink}>
      <DevLink
        url="https://twitter.com/Dhevine_0X"
        title="Twitter"
        id="twitter"
      />
      <DevLink
        id="btn__zuri"
        url="https://training.zuri.team/"
        title="Zuri Team"
      />
      <DevLink
        id="books"
        url="http://books.zuri.team"
        title="Zuri Bookshop"
        info="Find more books on coding and design."
      />
      <DevLink
        id="book__python"
        url="https://books.zuri.team/python-for-beginners?ref_id=Dalu"
        title="Python Books"
        info="Check out books on python for both beginner and advanced."
      />
      <DevLink
        id="pitch"
        url="https://background.zuri.team"
        title="Tech Talent Hunt"
        info="Background checks on coders."
      />
      <DevLink
        id="book__design"
        url="https://books.zuri.team/design-rules"
        title="Design Library"
        info="Get a free design book here."
      />

      <div className={style.socialMediaLink}>
        <a href="https://hng9.slack.com/" className={style.socialLink}>
          <img src={slack} alt="slack link" />
        </a>
        <a href="https://github.com/Heisdalu">
          <img src={github} alt="github link" />
        </a>
      </div>
    </nav>
  );
};

export default LinkSection;
