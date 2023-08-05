import React from "react";
import clsx from "clsx";
import style from "./styles.module.scss";
import { destinationNavItems } from "../../../data";
import { IDestinationNavItems } from "../../interfaces";
import { CurrentNavContext } from "../../contexts/currentNav";

interface IDestinationMenu {
  className?: string;
  ulClass?: string;
}

const DestinationMenu = (props: IDestinationMenu) => {
  const [active, setActive] = React.useState<IDestinationNavItems>("Moon");
  const { setDestinationNav } = React.useContext(CurrentNavContext);

  const getActiveNav = (index: number, title: IDestinationNavItems) => {
    if (destinationNavItems[index].title !== title) return;

    setActive(title);
    setDestinationNav(title);
  };

  return (
    <nav className={clsx(style.navBar, style.navBar2, props.className)}>
      <ul className={clsx(style.ul2)}>
        {destinationNavItems?.map((item, index) => (
          <li
            key={index}
            onClick={() =>
              getActiveNav(index, item.title as IDestinationNavItems)
            }
            className={clsx(style.li, style.li2, {
              [style.active]: active === item.title,
            })}
          >
            <p className={style.title}>{item.title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DestinationMenu;
