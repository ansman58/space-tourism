import React from "react";
import style from "./styles.module.scss";

interface IDistance {
  title: string;
  value: string;
}

const Distance = (props: IDistance) => {
  return (
    <div className={style.distance}>
      <p className={style.distanceP}>{props.title}</p>
      <p className={style.value}>{props.value}</p>
    </div>
  );
};

export default Distance;
