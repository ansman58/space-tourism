import clsx from "clsx";
import style from "./styles.module.scss";
import React from "react";
import { navItems } from "../../../data";
import { CurrentNavContext } from "../../contexts/currentNav";
import { INavItems } from "../../interfaces";

interface INavbar {
  className?: string;
}

const Navbar = (props: INavbar) => {
  const [active, setActive] = React.useState<INavItems>("Home");
  const { setCurrentNav } = React.useContext(CurrentNavContext);

  const getActiveNav = (index: number, title: INavItems) => {
    if (navItems[index].title !== title) return;
    setActive(title);
    setCurrentNav(title);
    localStorage.setItem("activeNav", title);
  };

  return (
    <nav className={clsx(style.navBar, props.className)}>
      <ul className={style.ul}>
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => getActiveNav(index, item.title as INavItems)}
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
