export type INavItems = "Home" | "Destinations" | "Crew" | "Technology";
export type IDestinationNavItems = "Moon" | "Mars" | "Europa";
export type ICrewRole =
  | "Commander"
  | "Mission Specialist"
  | "Pilot"
  | "Flight Engineer";

export type ITechnology = "Launch vehicle" | "Spaceport" | "Space capsule";

export type IDestination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export type ICrewMember = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

export type ITechnologyItem = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};
