import { FC } from "react";
import { Tabs } from "./Tabs";
import { tabData } from "./Tabs/TabData";

const ShopProducts: FC = (): JSX.Element => {
  

  return (
    <div className="mt-[30px]  border border-black  ">
      <Tabs tabs={tabData} />
    </div>
  );
};

export { ShopProducts };
