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

function App() {
  const [currentNav, setCurrentNav] = React.useState<INavItems>("Home");
  const [destinationNav, setDestinationNav] =
    React.useState<IDestinationNavItems>("Moon");

  const [crewMember, setCrewMember] = React.useState<ICrewRole>("Commander");
  const [technology, setTechnology] =
    React.useState<ITechnology>("Launch vehicle");

  const handleBackgroundImg = () => {
    switch (currentNav) {
      case "Home":
        return "../assets/home/background-home-desktop.jpg";
      case "Destinations":
        return "../assets/destination/background-destination-desktop.jpg";
      case "Crew":
        return "../assets/crew/background-crew-desktop.jpg";
      case "Technology":
        return "../assets/technology/background-technology-desktop.jpg";
      default:
        return "../assets/home/background-home-desktop.jpg";
    }
  };

  const navList = {
    Home: <Home />,
    Destinations: <Destination />,
    Crew: <Crew />,
    Technology: <Technology />,
  };

  const getCurrentNav = () => {
    return navList[currentNav] || navList.Home;
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
          backgroundImage: `url(${handleBackgroundImg()})`,
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
          </a>{" "}
        </p>
      </div>
    </CurrentNavContext.Provider>
  );
}

export default App;
