import style from "./styles.module.scss";
import clsx from "clsx";

interface ISection {
  className?: string;
  title: string;
  subtitle?: string;
  description: string;
}

const Section = (props: ISection) => {
  return (
    <div className={clsx(style.section, props.className)}>
      <p className={style.h2}>{props.subtitle}</p>
      <p className={style.h1}>{props.title}</p>
      <p className={style.p}>
       {props.description}
      </p>
    </div>
  );
};

export default Section;
