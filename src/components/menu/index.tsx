import clsx from "clsx";
import style from "./styles.module.scss";
import React from "react";
import { CurrentNavContext } from "../../contexts/currentNav";
import { INavItems } from "../../interfaces";
import { navItems } from "../../../data";
import Hamburger from "../../assets/shared/icon-hamburger.svg";
import CloseIcon from "../../assets/shared/icon-close.svg";
interface INavbar {
  className?: string;
}

const Navbar = (props: INavbar) => {
  const { setCurrentNav } = React.useContext(CurrentNavContext);
  const [active, setActive] = React.useState("Home");
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const getActiveNav = (index: number, title: string) => {
    if (navItems[index].title !== title) return;
    setActive(title);
    setCurrentNav(title as INavItems);
  };

  return (
    <nav
      className={clsx(style.navBar, props.className, style.mainNav, {
        [style.hideNav]: !isMobileNavOpen,
      })}
    >
      <div className={style.toggleIconContainer}>
        {isMobileNavOpen ? (
          <img
            src={CloseIcon}
            alt="close nav icon"
            className={style.hamburger}
            onClick={() => setIsMobileNavOpen(false)}
          />
        ) : (
          <img
            src={Hamburger}
            alt="open nav icon"
            className={style.hamburger}
            onClick={() => setIsMobileNavOpen(true)}
          />
        )}
      </div>
      <ul className={clsx(style.ul, { [style.hideUl]: !isMobileNavOpen })}>
        {navItems?.map((item, index) => (
          <li
            key={index}
            onClick={() => getActiveNav(index, item.title)}
            className={clsx(style.li, {
              [style.active]: active === item.title,
            })}
          >
            <p className={style.num}>{item.num}</p>
            <p className={style.title}>{item.title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
