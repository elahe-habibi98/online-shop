import { FC, useEffect, useState } from "react";
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
import useWindowDimensions from "../../../../core/utilies/index";
import { ProductCard } from "../ProductCard";
import { Tab } from "./Tab";

type TTab = { label: string; icon: string };

interface ITabsProp {
  tabs: TTab[];
  // tabData:{label:string,icon:string}
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
  // const skincareProducts: string[] = [item2, item7, item5];
  const [products, setProducts] = useState<string[]>(allProducts);
  // const [arrayLength, setArrayLength] = useState(11);

  //******  Handle data of tabs  *******/
  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);

    if (index === 0) {
      setProducts(allProducts);
    }
    if (index === 1) {
      setProducts(clothingProducts);
    }
    // if (index === 2) {
    //   setProducts(skincareProducts);
    // }
    if (index >= 2) {
      setProducts([]);
    }
  };

  {
    /* grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 */
  }
  // const lengthTest = arrayLength % 4;

  //******  Handle responsive mode of data of tabs  *******/
  // const [productLength, setProductLength] = useState<number>(products.length);
  // const [numberOfColumns, setNumberOfColumns] = useState<number>(4);
  // const [remainingData, setRemainingData] = useState<number>(
  //   productLength % numberOfColumns
  // );

  // useEffect(() => {
  //   setProductLength(products.length);
  // }, [products]);

  // useEffect(() => {
  //   console.log("windowWidth", windowWidth);
  //   if (windowWidth >= 640) {
  //     setNumberOfColumns(2);
  //   }
  //   if (windowWidth >= 768) {
  //     setNumberOfColumns(3);
  //   }
  //   if (windowWidth >= 1024) {
  //     setNumberOfColumns(3);
  //   }
  //   if (windowWidth >= 1280) {
  //     setNumberOfColumns(4);
  //   }
  //   console.log("number of cols:", numberOfColumns);
  // }, [windowWidth]);

  // useEffect(() => {
  //   const remain = productLength % numberOfColumns;
  //   setRemainingData(remain);
  //   console.log("remain:", remain);
  // }, [windowWidth, products]);

  const windowWidth = useWindowDimensions().width;
  const [remainingData, setRemainingData] = useState<number>(
    products.length % 4
  );
  useEffect(() => {
    if (windowWidth >= 640) {
      const remain = products.length % 2;
      setRemainingData(remain);
    }
    if (windowWidth >= 768) {
      const remain = products.length % 3;
      setRemainingData(remain);
    }
    if (windowWidth >= 1024) {
      const remain = products.length % 3;
      setRemainingData(remain);
    }
    if (windowWidth >= 1280) {
      const remain = products.length % 4;
      setRemainingData(remain);
    }
  }, [windowWidth, products]);

  return (
    <div className="tabs-container ">
      <div className="flex justify-between border-b-[3px] border-gray-light ">
        {tabs.map((m: TTab, index: number) => (
          <Tab
            key={index}
            tabData={m}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab - 1}
          />
        ))}
      </div>

      <div className={`mt-[20px] overflow-y-auto h-[300px]`}>
        {/* {products.map((m: string, index: number) =>
          products.length > 0 ? (
            <div key={index} className=" basis-1/3 justify-self-center  h-[250px] mb-[10px]">
              <div
              
              className="me-[10px] rounded-lg bg-gray-dark h-[100%] overflow-hidden relative"
            >
              <div className="bg-black px-[8px] py-[3px] absolute top-[15px] left-[15px] flex items-center gap-1 rounded-[20px]">
                <img src={starIcon} alt="" className="w-[12px] h-[12px] " />
                <span className="text-white-dark text-sm">4.5</span>
              </div>

              <img src={m} alt="" className="w-[100%] h-[60%] object-cover" />
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
            </div>
            
          ) : (
            <div className="text-red-500">No Items.</div>
          )
        )} */}
        {/* {products.slice(0, products.length-lengthTest).map(()=><div className="basis-1/4 h-[100px] border border-red-500]"></div>)} */}
        <div className="flex flex-wrap">
          {products
            .slice(0, products.length - remainingData)
            .map((m: string, index: number) => (
              // <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 h-[100px] border border-red-500"></div>
              <ProductCard index={index} item={m} />
            ))}
        </div>
        <div className="flex justify-around">
          {products
            .slice(products.length - remainingData , products.length )
            .map((m: string, index: number) => (
              // <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 h-[100px] border border-green-500 bg-red-500"></div>
              <ProductCard index={index} item={m} />
            ))}
        </div>
      </div>
      {/* <div className="flex justify-around">
        {products
          .slice(products.length - lengthTest - 1, products.length - 1)
          .map(() => (
            <div className="basis-1/4 h-[100px] border border-red-500]"></div>
          ))}
      </div> */}
      {/* <div className="flex justify-around">
        {products
          .slice(productLength - remainingData - 1, productLength - 1)
          .map(() => (
            <div
              // className={`basis-1/${numberOfColumns} h-[100px] border border-red-500`}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 h-[100px] border border-red-500 bg-red-500"
            ></div>
          ))}
      </div> */}
    </div>
  );
};

export { Tabs };
