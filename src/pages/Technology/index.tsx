import React from "react";
import style from "./styles.module.scss";
import Section from "../../components/Section";
import { ITechnology, ITechnologyItem } from "../../interfaces";
import { technologies } from "../../../data";
import { CurrentNavContext } from "../../contexts/currentNav";
import clsx from "clsx";

const Technology = () => {
  const { technology, setTechnology } = React.useContext(CurrentNavContext);
  const [data, setData] = React.useState<ITechnologyItem | null>(null);

  React.useEffect(() => {
    const list = technologies.find((item) => item.name === technology);
    setData(list as ITechnologyItem);
  }, [technology]);

  return (
    <div className={style.technology}>
      <div className={style.left}>
        <div className={style.numContainer}>
          {technologies.map((item, index) => (
            <div
              key={index}
              className={clsx(style.num, {
                [style.active]: item.name === technology,
              })}
              onClick={() => setTechnology(item.name as ITechnology)}
            >
              <p>{index}</p>
            </div>
          ))}
        </div>
        <Section
          subtitle="THE TERMINOLOGY..."
          title={data?.name as string}
          description={data?.description as string}
        />
      </div>
      <div>
        <img src={data?.images?.portrait} alt="" />
      </div>
    </div>
  );
};

export default Technology;
