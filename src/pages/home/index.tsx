import Section from "../../components/Section";
import style from "./styles.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <Section className={style.first} />

      <div className={style.second}>
        <p>Explore</p>
      </div>
    </div>
  );
};

export default Home;
