import { FC } from "react";
import { Tabs } from "./Tabs";

const ShopProducts: FC = (): JSX.Element => {
  const tabData: string[] = [
    "All Products",
    "Clothing",
    "Skincare",
    "Shoes",
    "Crafts",
    "Household",
    "Electronics",
  ];

  return (
    <div className="mt-[30px]  border border-black  ">
      <Tabs tabs={tabData} />
    </div>
  );
};

export { ShopProducts };
