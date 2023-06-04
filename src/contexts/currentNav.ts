import React from "react";
import {
  ICrewMember,
  ICrewRole,
  IDestinationNavItems,
  INavItems,
} from "../interfaces";

interface IInitialState {
  currentNav: INavItems;
  setCurrentNav: React.Dispatch<React.SetStateAction<INavItems>>;
  destinationNav: IDestinationNavItems;
  setDestinationNav: React.Dispatch<React.SetStateAction<IDestinationNavItems>>;
  crewMember: ICrewRole;
  setCrewMember: React.Dispatch<React.SetStateAction<ICrewRole>>;
}

const initialState: IInitialState = {
  currentNav: "Home",
  setCurrentNav: () => {},
  destinationNav: "Moon",
  setDestinationNav: () => {},
  crewMember: "Commander",
  setCrewMember: () => {},
};

export const CurrentNavContext = React.createContext(initialState);
