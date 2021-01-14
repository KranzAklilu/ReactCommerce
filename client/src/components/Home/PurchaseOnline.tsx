import React from "react";

import CustomSectionTitle from "../custom/SectionTitle";
import PurchaseOnlineFilter from "./PurchaseOnlineFilter";
import PurchaseOnlineCards from "./PurchaseOnlineCards";

const PurchaseOnline = () => {
  return (
    <>
      <CustomSectionTitle title="purchase online from hursk" />
      <PurchaseOnlineFilter />
      <PurchaseOnlineCards />
    </>
  );
};

export default PurchaseOnline;
