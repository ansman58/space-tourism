import Navbar from "../../components/menu";
import style from "./styles.module.scss";
import Logo from "../../assets/shared/logo.svg";

const Home = () => {
  return (
    <div className={style.home}>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
