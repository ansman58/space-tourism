import style from "./App.module.scss";
import Header from "./components/Header";
import Intro from "./components/Intro";
import { CurrentNavContext } from "./contexts/currentNav";
import { IDestinationNavItems, INavItems } from "./interfaces";
import Destination from "./pages/Destination";
import Home from "./pages/home";
import React from "react";

function App() {
  const [currentNav, setCurrentNav] = React.useState<INavItems>("Home");
  const [destinationNav, setDestinationNav] =
    React.useState<IDestinationNavItems>("Moon");

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

  return (
    <CurrentNavContext.Provider
      value={{ currentNav, setCurrentNav, destinationNav, setDestinationNav }}
    >
      <div
        className={style.app}
        style={{
          backgroundImage: `url(${handleBackgroundImg()})`,
        }}
      >
        <Header />
        <div className={style.sections}>
          {currentNav === "Home" ? (
            <Home />
          ) : currentNav === "Destinations" ? (
            <Destination />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </CurrentNavContext.Provider>
  );
}

export default App;
