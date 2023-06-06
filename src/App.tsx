import style from "./App.module.scss";
import Header from "./components/Header";
import { CurrentNavContext } from "./contexts/currentNav";
import {
  ICrewRole,
  IDestinationNavItems,
  INavItems,
  ITechnology,
} from "./interfaces";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Home from "./pages/home";
import React from "react";
import HomeBg from "../assets/home/background-home-desktop.jpg";
import DestinationBg from "../assets/destination/background-destination-desktop.jpg";
import CrewBg from "../assets/crew/background-crew-desktop.jpg";
import TechnologyBg from "../assets/home/background-home-desktop.jpg";

function App() {
  const [currentNav, setCurrentNav] = React.useState<INavItems>("Home");
  const [destinationNav, setDestinationNav] =
    React.useState<IDestinationNavItems>("Moon");

  const [crewMember, setCrewMember] = React.useState<ICrewRole>("Commander");
  const [technology, setTechnology] =
    React.useState<ITechnology>("Launch vehicle");

  const backgroundImg = {
    Home: HomeBg,
    Destinations: DestinationBg,
    Crew: CrewBg,
    Technology: TechnologyBg,
  };

  const navComponents = {
    Home: <Home />,
    Destinations: <Destination />,
    Crew: <Crew />,
    Technology: <Technology />,
  };

  const getCurrentNav = () => {
    return navComponents[currentNav] || navComponents.Home;
  };

  return (
    <CurrentNavContext.Provider
      value={{
        currentNav,
        setCurrentNav,
        destinationNav,
        setDestinationNav,
        crewMember,
        setCrewMember,
        technology,
        setTechnology,
      }}
    >
      <div
        className={style.app}
        style={{
          backgroundImage: `url(${backgroundImg[currentNav]})`,
        }}
      >
        <Header />
        <div className={style.sections}>{getCurrentNav()}</div>
        <p className={style.built}>
          Built by{" "}
          <a
            target="blank"
            href="https://www.linkedin.com/in/nnakwe-anslem-534047189/"
          >
            Anslem Nnakwe
          </a>
        </p>
      </div>
    </CurrentNavContext.Provider>
  );
}

export default App;
