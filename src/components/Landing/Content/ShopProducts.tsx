import { FC } from "react";
import { Tabs } from "./Tabs";
import { tabData } from "./Tabs/TabData";

const ShopProducts: FC = (): JSX.Element => {
  

  return (
    <div className="mt-[30px]   ">
      <Tabs tabs={tabData} />
    </div>
  );
};

export { ShopProducts };
