import React from "react";

export const useClickOutside = () => {
  const [closeMenu, setCloseMenu] = React.useState(false);
  const menuRef = React.useRef<any>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setCloseMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    closeMenu,
    menuRef,
    setCloseMenu,
  };
};
