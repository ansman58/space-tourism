import Section from "../../components/Section";
import style from "./styles.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <Section
        className={style.first}
        subtitle="SO, YOU WANT TO TRAVEL TO"
        title="SPACE"
        description=" Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!"
      />
      <div className={style.second}>
        <p>Explore</p>
      </div>
    </div>
  );
};

export default Home;
