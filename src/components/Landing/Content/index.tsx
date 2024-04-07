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
      <div className="border h-[30px] my-[10px]"></div>
      <div className="border h-[190px] mb-[5px] grid grid-cols-4 gap-4">
        {/* <div className=" rounded-lg bg-gray-dark h-[100%] p-[15px]">
          <img src={shop} className="w-[100%] h-[70px] rounded-lg" />
          <div className="">
            <div className="h-[25px] bg-gray-dark flex gap-2 items-center mt-[5px]">
              <img src={storeIcon} className="h-[100%] w-[15px]" />
              <p className="text-white">Clothing shop</p>
              <img src={verifyIcon} className="h-[100%] w-[15px]" />
              <div className="ms-auto flex gap-2 items-center">
                <div className="w-[7px] h-[7px] bg-green-lawn rounded-full" />
                <p className="text-green-lawn">Online</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="text-white bg-blue-dark rounded-[20px]">
                Follow  +
              </button>
              <button className="text-white bg-gray-dark border-2 border-blue-dark rounded-[20px] flex items-center justify-center gap-2">
                Chat
                <img src={chatIcon} className="w-[15px] h-[15px]" />
              </button>
            </div>
          </div>
        </div> */}
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
        <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
        <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
        <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
      </div> */}
      <ShopProducts />
    </div>
  );
};

export { Content };
