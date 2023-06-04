import React from "react";
import { INavItems } from "../interfaces";

interface IInitialState {
  currentNav: INavItems;
  setCurrentNav: React.Dispatch<React.SetStateAction<INavItems>>;
}

const initialState: IInitialState = {
  currentNav: "Home",
  setCurrentNav: () => {},
};

export const CurrentNavContext = React.createContext(initialState);
