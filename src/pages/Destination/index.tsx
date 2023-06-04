import React from "react";
import { destinations } from "../../../data";
import Section from "../../components/Section";
import DestinationMenu from "../../components/menu/destinationMenu";
import { CurrentNavContext } from "../../contexts/currentNav";
import { IDestination } from "../../interfaces";
import style from "./styles.module.scss";
import Intro from "../../components/Intro";
import Distance from "../../components/Distance";

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
            <Distance title="AVG. DISTANCE" value={data?.distance as string} />
            <Distance title="EST. TRAVEL TIME" value={data?.travel as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
