import style from "./styles.module.scss";
import clsx from "clsx";

interface ISection {
  className?: string;
  title: string;
  subtitle?: string;
  description: string;
  titleClass?: string;
  subtitleClass?: string;
}

const Section = (props: ISection) => {
  return (
    <div className={clsx(style.section, props.className)}>
      <p className={clsx(style.h2, props.subtitleClass)}>{props.subtitle}</p>
      <p className={clsx(style.h1, props.titleClass)}>{props.title}</p>
      <p className={style.p}>{props.description}</p>
    </div>
  );
};

export default Section;
