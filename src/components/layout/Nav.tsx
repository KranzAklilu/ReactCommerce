import React, { useState } from "react";

import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";

const ButtonAppBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = function () {
    setOpen(!open);
  };

  return (
    <div>
      <NavBar open={open} handleOpen={handleOpen} />
      <NavDrawer open={open} setOpen={setOpen} handleOpen={handleOpen} />
      {/* <IconButton color="inherit" aria-label="Shopping Cart">
            <ShoppingCart />
          </IconButton> */}
    </div>
  );
};
export default ButtonAppBar;
