import style from "./styles.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.first}>
        <p className={style.h2}>SO, YOU WANT TO TRAVEL TO</p>
        <p className={style.h1}>SPACE</p>
        <p className={style.p}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={style.second}>
        <p>Explore</p>
      </div>
    </div>
  );
};

export default Home;
