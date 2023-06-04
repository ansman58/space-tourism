import React from "react";
import { destinations } from "../../../data";
import Section from "../../components/Section";
import DestinationMenu from "../../components/menu/destinationMenu";
import { CurrentNavContext } from "../../contexts/currentNav";
import { IDestination } from "../../interfaces";
import style from "./styles.module.scss";
import Intro from "../../components/Intro";

const Destination = () => {
  const { destinationNav } = React.useContext(CurrentNavContext);
  const [data, setData] = React.useState<IDestination | null>(null);

  React.useEffect(() => {
    const list = destinations.find((item) => item.name === destinationNav);
    setData(list as IDestination);
  }, [destinationNav]);

  return (
    <div className={style.destination}>
      <div className={style.flex}>
        <div className={style.left}>
          <Intro num="00" title="PICK YOUR DESTINATION" />

          <img
            src={data?.images.png}
            alt="revolving globe"
            className={style.img}
          />
        </div>

        <div className={style.right}>
          <DestinationMenu className={style.nav} />

          <Section
            title={data?.name as string}
            description={data?.description as string}
          />
          <div className={style.extra}>
            <div className={style.distance}>
              <p className={style.distanceP}>AVG. DISTANCE</p>
              <p className={style.value}>{data?.distance}</p>
            </div>
            <div className={style.timeEstimate}>
              <p className={style.distanceP}>EST. TRAVEL TIME</p>
              <p className={style.value}>{data?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
