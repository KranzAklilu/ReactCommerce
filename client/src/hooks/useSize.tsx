import React, { useState } from "react";

const useSize = () => {
  const initialState = {
    xl: false,
    lg: false,
    md: true,
    sm: false,
    xs: false,
  };
  const [activeSize, setActiveSize] = useState<any>(initialState);

  const handleChange = function (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    const toBeActive = event.currentTarget.innerHTML.toLowerCase();

    Object.keys(activeSize).forEach((key) =>
      setActiveSize((prevSize: any) => ({ ...prevSize, [key]: false }))
    );
    setActiveSize((prevSize: any) => ({ ...prevSize, [toBeActive]: true }));
  };

  return { activeSize, setActiveSize, handleChange };
};

export default useSize;
