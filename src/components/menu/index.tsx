import clsx from "clsx";
import style from "./styles.module.scss";

interface INavbar {
  className?: string;
}

const Navbar = (props: INavbar) => {
  const navItem = [
    {
      num: "00",
      title: "Home",
    },
    {
      num: "01",
      title: "Destinations",
    },
    {
      num: "03",
      title: "Crew",
    },
    {
      num: "04",
      title: "Technology",
    },
  ];

  return (
    <nav className={clsx(style.navBar, props.className)}>
      <ul className={style.ul}>
        {navItem.map((item) => (
          <li key={item.num} className={style.li}>
            <p className={style.num}>{item.num}</p>
            <p className={style.title}>{item.title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
