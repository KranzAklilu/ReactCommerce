import React from "react";

import CheckBox from "../custom/CheckBox";
import { Box, Tooltip } from "@material-ui/core";
import { useProperty } from "../../context/ProductsProperty";

const ProductCheckbox = () => {
  const { activeColor, handleColorChange: handleChange } = useProperty();

  const colors = [
    {
      name: "lightsalmon",
      quantity: 20,
    },
    {
      name: "atlantis",
      quantity: 20,
    },
    {
      name: "deeplilac",
      quantity: 20,
    },
  ];
  return (
    <>
      {colors.map(({ name }, index) => (
        <Tooltip
          key={index}
          placement="top"
          title={name.toUpperCase()}
          disableFocusListener
          disableTouchListener
          arrow
        >
          <Box>
            <CheckBox
              name={name}
              activeColor={activeColor}
              handleChange={handleChange}
            />
          </Box>
        </Tooltip>
      ))}
    </>
  );
};

export default ProductCheckbox;
