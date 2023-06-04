export type INavItems = "Home" | "Destinations" | "Crew" | "Technology";
export type IDestinationNavItems = "Moon" | "Mars" | "Europa";
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
