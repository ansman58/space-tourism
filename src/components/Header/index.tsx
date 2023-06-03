import Navbar from "../menu";
import Logo from "../../assets/shared/logo.svg";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <img src={Logo} alt="logo" className={style.logo} />
        <div className={style.hr}></div>
      </div>
      <Navbar className={style.nav} />
    </div>
  );
};

export default Header;
