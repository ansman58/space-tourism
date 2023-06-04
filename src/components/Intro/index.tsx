import React from "react";
import style from "./styles.module.scss";

interface IIntro {
  className?: string;
  title: string;
  num: string;
}

const Intro = (props: IIntro) => {
  return (
    <div className={style.intro}>
      <span className={style.num}>{props.num}</span>
      <span className={style.title}>{props.title}</span>
    </div>
  );
};

export default Intro;
