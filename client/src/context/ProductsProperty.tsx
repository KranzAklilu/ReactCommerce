import React, { useState, createContext, useContext } from "react";

type Color = {
  lightsalmon?: boolean;
  tomato?: boolean;
  darksalmon?: boolean;
  deepsky?: boolean;
  electricpurple?: boolean;
  atlantis?: boolean;
  deeplilac?: boolean;
};
type Size = {
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
};

type propertyContextType = {
  activeColor: Color;
  setActiveColor: (color: Color) => void;
  handleColorChange: () => void;
  activeSize: Size;
  setActiveSize: (size: Size) => void;
  handleSizeChange: () => void;
};
const PropertyContext = createContext<propertyContextType>({
  activeColor: { atlantis: false },
  setActiveColor: (color) => console.warn("No Providers yet"),
  handleColorChange: () => console.warn("No providers "),
  activeSize: { xl: false },
  setActiveSize: (size) => console.warn("No Providers yet"),
  handleSizeChange: () => console.warn("No providers "),
});

const initialColorState = {
  lightsalmon: false,
  tomato: false,
  darksalmon: false,
  deepsky: false,
  electricpurple: false,
  atlantis: false,
  deeplilac: false,
};
const initialSizeState = {
  xl: false,
  lg: false,
  md: true,
  sm: false,
  xs: false,
};
const ProductsPropertyProvider = (props: any) => {
  const [activeColor, setActiveColor] = useState<any>(initialColorState);
  const [activeSize, setActiveSize] = useState<any>(initialSizeState);

  const handleColorChange = function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setActiveColor({
      ...activeColor,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSizeChange = function (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    const toBeActive = event.currentTarget.innerHTML.toLowerCase();

    Object.keys(activeSize).forEach((key) =>
      setActiveSize((prevSize: any) => ({ ...prevSize, [key]: false }))
    );
    setActiveSize((prevSize: any) => ({ ...prevSize, [toBeActive]: true }));
  };
  return (
    <PropertyContext.Provider
      value={{
        activeColor,
        setActiveColor,
        activeSize,
        setActiveSize,
        handleColorChange,
        handleSizeChange,
      }}
      {...props}
    />
  );
};

export { ProductsPropertyProvider, PropertyContext as ProductsContext };
export const useProperty = () => useContext(PropertyContext);
