import React from "react";
import {
  ICrewMember,
  ICrewRole,
  IDestinationNavItems,
  INavItems,
  ITechnology,
} from "../interfaces";

interface IInitialState {
  currentNav: INavItems;
  setCurrentNav: React.Dispatch<React.SetStateAction<INavItems>>;
  destinationNav: IDestinationNavItems;
  setDestinationNav: React.Dispatch<React.SetStateAction<IDestinationNavItems>>;
  crewMember: ICrewRole;
  setCrewMember: React.Dispatch<React.SetStateAction<ICrewRole>>;
  technology: ITechnology;
  setTechnology: React.Dispatch<React.SetStateAction<ITechnology>>;
}

const initialState: IInitialState = {
  currentNav: "Home",
  setCurrentNav: () => {},
  destinationNav: "Moon",
  setDestinationNav: () => {},
  crewMember: "Commander",
  setCrewMember: () => {},
  technology: "Launch vehicle",
  setTechnology: () => {},
};

export const CurrentNavContext = React.createContext(initialState);
