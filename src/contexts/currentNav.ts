import React from "react";
import { IDestinationNavItems, INavItems } from "../interfaces";

interface IInitialState {
  currentNav: INavItems;
  setCurrentNav: React.Dispatch<React.SetStateAction<INavItems>>;
  destinationNav: IDestinationNavItems;
  setDestinationNav: React.Dispatch<React.SetStateAction<IDestinationNavItems>>
}

const initialState: IInitialState = {
  currentNav: "Home",
  setCurrentNav: () => {},
  destinationNav: "Moon",
  setDestinationNav: () => {},
};

export const CurrentNavContext = React.createContext(initialState);
