import { FC, useState } from "react";
import item1 from "../../../../assets/images/clothing/item1.jpg";
import item4 from "../../../../assets/images/clothing/item4.jpg";
import item6 from "../../../../assets/images/clothing/item6.jpg";
import starIcon from "../../../../assets/images/icons/starFilled.svg";
import item8 from "../../../../assets/images/jewelry/item4.jpg";
import item3 from "../../../../assets/images/jewelry/item8.jpg";
import item9 from "../../../../assets/images/jewelry/shop.jpg";
import item2 from "../../../../assets/images/skincare/item2.jpg";
import item7 from "../../../../assets/images/skincare/item4.jpg";
import item5 from "../../../../assets/images/skincare/item6.jpg";
import { Tab } from "./Tab";

interface ITabsProp {
  tabs: any;
}

const Tabs: FC<ITabsProp> = ({ tabs }): JSX.Element => {
  const [activeTab, setActiveTab] = useState(1);
  const allProducts = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
  ];
  const clothingProducts = [item1, item4, item6];
  const skincareProducts = [item2, item7, item5];
  const [products, setProducts] = useState(allProducts);

  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);

    if (index === 0) {
      setProducts(allProducts);
    }
    if (index === 1) {
      setProducts(clothingProducts);
    }
    if (index === 2) {
      setProducts(skincareProducts);
    }
    if (index >= 3) {
      setProducts([]);
    }
  };
  console.log("length:", products.length);

  return (
    <div className="tabs-container ">
      <div className="flex justify-between border-b-[3px] border-gray-light ">
        {tabs.map((m: any, index: number) => (
          <Tab
            key={index}
            label={m.label}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab - 1}
          />
        ))}
      </div>
      <div className="mt-[20px] grid grid-cols-4 gap-4 pe-[10px] overflow-y-auto h-[300px]">
        {products.map((m: any, index: number) =>
          products.length > 0 ? (
            <div
              key={index}
              className=" rounded-lg bg-gray-dark h-[250px] overflow-hidden relative"
            >
              <div className="bg-black px-[8px] py-[3px] absolute top-[15px] left-[15px] flex items-center gap-1 rounded-[20px]">
                <img src={starIcon} className="w-[12px] h-[12px] " />
                <span className="text-white-dark text-sm">4.5</span>
              </div>

              <img src={m} className="w-[100%] h-[60%] object-cover" />
              <div className="px-[15px] h-[40%] flex flex-col justify-between py-[15px]">
                <div className="text-white-dark flex justify-between text-lg">
                  <span>Product</span>
                  <span>
                    $96.<span className="text-sm">50</span>
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-gray-light col-span-2 text-xs">
                    Lorem ipsum dolor sit amet, consectetur
                  </span>
                  <div className="flex justify-end">
                    <button className="text-white bg-blue-dark rounded-[20px] px-[10px] text-sm">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) :  (
            <div className="text-red-500">No Items.</div>
          ) 
        )}
      </div>
    </div>
  );
};

export { Tabs };
