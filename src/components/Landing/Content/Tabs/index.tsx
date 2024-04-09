import { FC, useState } from "react";
import item1 from "../../../../assets/images/clothing/item1.jpg";
import item4 from "../../../../assets/images/clothing/item4.jpg";
import item6 from "../../../../assets/images/clothing/item6.jpg";
import item5 from "../../../../assets/images/clothing/item9.jpg";
import item11 from "../../../../assets/images/jewelry/item2.jpg";
import item8 from "../../../../assets/images/jewelry/item4.jpg";
import item3 from "../../../../assets/images/jewelry/item8.jpg";
import item9 from "../../../../assets/images/jewelry/shop.jpg";
import item2 from "../../../../assets/images/skincare/item2.jpg";
import item7 from "../../../../assets/images/skincare/item4.jpg";
import item10 from "../../../../assets/images/skincare/item8.jpg";
import { ProductCard } from "../ProductCard";
import { Tab } from "./Tab";

type TTab = { label: string; icon: string };

interface ITabsProp {
  tabs: TTab[];
}

const Tabs: FC<ITabsProp> = ({ tabs }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const allProducts: string[] = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
  ];
  const clothingProducts: string[] = [item1, item4, item6, item5];
  const [products, setProducts] = useState<string[]>(allProducts);

  //******  Handle data of tabs  *******/
  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);

    if (index === 0) {
      setProducts(allProducts);
    }
    if (index === 1) {
      setProducts(clothingProducts);
    }
    if (index >= 2) {
      setProducts([]);
    }
  };

  return (
    <div className="tabs-container ">
      <div className="flex justify-between border-b-[3px] border-gray-light ">
        {tabs.map((item: TTab, index: number) => (
          <Tab
            key={index}
            tabData={item}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab - 1}
          />
        ))}
      </div>

      <div
        className={`mt-[20px] flex flex-wrap justify-center overflow-y-auto h-[300px]`}
      >
        {products.map((item: string, index: number) => (
          <ProductCard index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export { Tabs };
