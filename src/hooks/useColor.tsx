import React, { useState } from "react";

const useColor = () => {
  const initialState = {
    lightsalmon: false,
    tomato: false,
    darksalmon: false,
    deepsky: false,
    electricpurple: false,
    atlantis: false,
    deeplilac: false,
  };

  const [activeColor, setActiveColor] = useState<any>(initialState);
  console.log(activeColor);
  const handleChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    setActiveColor({
      ...activeColor,
      [event.target.name]: event.target.checked,
    });
  };

  return { activeColor, setActiveColor, handleChange };
};

export default useColor;
