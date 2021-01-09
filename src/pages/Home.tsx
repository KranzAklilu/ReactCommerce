import React from "react";

import HeroCarousel from "../components/layout/HeroCarousel";
import HeroCards from "../components/layout/HeroCards";
import Featured from "../components/Home/Featured";
import PurchaseOnline from "../components/Home/PurchaseOnline";
import Blog from "../components/Home/Blog";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <HeroCards />
      <Featured />
      <PurchaseOnline />
      <Blog />
    </>
  );
};

export default Home;
