import React from "react";
import style from "./styles.module.scss";
import Intro from "../../components/Intro";
import Section from "../../components/Section";
import { crew } from "../../../data";
import { ICrewMember, ICrewRole } from "../../interfaces";
import { CurrentNavContext } from "../../contexts/currentNav";
import clsx from "clsx";

const Crew = () => {
  const [data, setData] = React.useState<ICrewMember | null>(null);
  const { crewMember, setCrewMember } = React.useContext(CurrentNavContext);

  React.useEffect(() => {
    const crewMemberInfo = crew.find((item) => item.role === crewMember);
    setData(crewMemberInfo as ICrewMember);
  }, [crewMember]);

  return (
    <div className={style.crew}>
      <Intro num="01" title="MEET YOUR CREW" />
      <div className={style.flex}>
        <div>
          <Section
            subtitle={data?.role}
            title={data?.name as string}
            description={data?.bio as string}
            titleClass={style.sectionTitle}
            subtitleClass={style.sectionSubtitle}
          />

          <div className={style.toggleContainer}>
            {crew.map((member) => (
              <div
                className={clsx(style.toggle, {
                  [style.active]: member.role === crewMember,
                })}
                onClick={() => setCrewMember(member.role as ICrewRole)}
              ></div>
            ))}
          </div>
        </div>
        <img src={data?.images?.png} alt="crew member" className={style.img} />
      </div>
    </div>
  );
};

export default Crew;
