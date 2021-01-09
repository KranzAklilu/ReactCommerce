import React from "react";

import NavBar from "./components/layout/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import ScrollTop from "./components/layout/ScrollTop";

import { Box, useTheme } from "@material-ui/core";

import { Switch, Route } from "react-router-dom";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/thumbs/thumbs.scss";

import "./App.css";

function App() {
  const theme = useTheme();
  return (
    <Box pb="200px" bgcolor={theme.palette.background.default} className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:slug" exact component={SingleProduct} />
        <Route path="/cart" exact component={Cart} />
        <Route component={Error404} />
      </Switch>
      <ScrollTop />
    </Box>
  );
}

export default App;
