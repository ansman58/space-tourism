import clsx from "clsx";
import style from "./styles.module.scss";
import React from "react";
import { CurrentNavContext } from "../../contexts/currentNav";
import { INavItems } from "../../interfaces";
import { navItems } from "../../../data";

interface INavbar {
  className?: string;
  data: any[];
}

const Navbar = (props: INavbar) => {
  const { setCurrentNav } = React.useContext(CurrentNavContext);
  const [active, setActive] = React.useState("Home");

  const getActiveNav = (index: number, title: string) => {
    if (navItems[index].title !== title) return;
    console.log("title", title);
    setActive(title);
    setCurrentNav(title as INavItems);
    localStorage.setItem("activeNav", title);
  };

  return (
    <nav className={clsx(style.navBar, props.className)}>
      <ul className={style.ul}>
        {navItems?.map((item, index) => (
          <li
            key={index}
            onClick={() => getActiveNav(index, item.title)}
            className={clsx(style.li, {
              [style.active]: active === item.title,
              // [style.li2]: !props.isPrimaryNav,
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
