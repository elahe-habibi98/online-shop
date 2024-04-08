import { FC } from "react";
import { ShopAccount } from "./ShopAccount";
import { ShopContact } from "./ShopContact";
import { ShopInfo } from "./ShopInfo";
import { ShopProducts } from "./ShopProducts";
import trophyIcon from "../../../assets/images/icons/champion.svg";
import likeIcon from "../../../assets/images/icons/thumb.svg";

const Content: FC = (): JSX.Element => {
  return (
    <div className="border col-span-10">
      <div className="border h-[30px] my-[10px] text-gray-light flex gap-2">
        <span>Home</span>
        <span>{">"}</span>
        <span>Shop</span>
        <span>{">"}</span>
        <span className="text-white-dark">Mawarshop</span>
      </div>
      <div className="border h-[190px] mb-[5px] grid grid-cols-4 gap-4">
        {/* <div className=" rounded-lg bg-gray-dark h-[100%] p-[15px]"></div> */}
        <ShopAccount />
        <div className="border border-green-500 h-[100%] col-span-3 grid grid-rows-3 gap-5">
          <div className="border border-red-500 row-span-2 grid grid-cols-11 gap-4">
            {/* <div className=" col-span-3 rounded-lg bg-gray-dark"></div> */}
            <ShopInfo />
            <div className=" rounded-lg bg-green-lawn col-span-3 text-white flex items-center justify-center ">
              <div className="flex flex-col justify-between w-[80%] items-center">
                <span>Adwards for</span>
                <span>top shops</span>
                <img src={trophyIcon} className="w-[30px] h-[30px] mt-[10px]" />
              </div>
            </div>
            <div className=" rounded-lg bg-green-lawn col-span-3 text-white flex items-center justify-center ">
              <div className="flex flex-col justify-between w-[80%] items-center">
                <span>Best seller of</span>
                <span>the year</span>
                <img src={likeIcon} className="w-[30px] h-[30px] mt-[10px]" />
              </div>
            </div>
          </div>
          {/* <div className=" rounded-lg bg-gray-dark"></div> */}
          <ShopContact />
        </div>
      </div>
      {/* <div className="mt-[30px] border border-black grid grid-cols-4 gap-4">
        <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
      </div> */}
      <ShopProducts />
    </div>
  );
};

export { Content };
