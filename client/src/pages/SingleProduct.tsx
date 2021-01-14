import React from "react";

import Hero from "../components/custom/BreadcrumbHero";
import ProductCard from "../components/SingleProduct/ProductCard";
import ProductsDetails from "../components/SingleProduct/ProductsDetails";

const SingleProduct = () => {
  return (
    <>
      <Hero page="Single Page"></Hero>
      <ProductCard />
      <ProductsDetails />
    </>
  );
};

export default SingleProduct;
