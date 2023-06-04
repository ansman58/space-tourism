import React from "react";
import clsx from "clsx";
import style from "./styles.module.scss";
import Section from "../../components/Section";
import { ITechnology, ITechnologyItem } from "../../interfaces";
import { technologies } from "../../../data";
import { CurrentNavContext } from "../../contexts/currentNav";
import Intro from "../../components/Intro";

const Technology = () => {
  const { technology, setTechnology } = React.useContext(CurrentNavContext);
  const [data, setData] = React.useState<ITechnologyItem | null>(null);

  React.useEffect(() => {
    const list = technologies.find((item) => item.name === technology);
    setData(list as ITechnologyItem);
  }, [technology]);

  return (
    <div className={style.technology}>
      <Intro num="03" title="SPACE LAUNCH 101" />
      <div className={style.mainContent}>
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
            titleClass={style.sectionTitle}
            subtitleClass={style.sectionSubtitle}
          />
        </div>
        <div className={style.imgContainer}>
          <img src={data?.images?.portrait} alt="" className={style.img} />
        </div>
      </div>
    </div>
  );
};

export default Technology;
