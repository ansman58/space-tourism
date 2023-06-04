import style from "./App.module.scss";
import Header from "./components/Header";
import { CurrentNavContext } from "./contexts/currentNav";
import { INavItems } from "./interfaces";
import Destination from "./pages/Destination";
import Home from "./pages/home";
import React from "react";

function App() {
  const [currentNav, setCurrentNav] = React.useState<INavItems>("Home");

  return (
    <CurrentNavContext.Provider value={{ currentNav, setCurrentNav }}>
      <div className={style.app}>
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
