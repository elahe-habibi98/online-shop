import { FC } from "react";
import shop from "../../../assets/images/skincare/item3.jpg";
import chatIcon from "../../../assets/images/icons/commentBlue.svg";
import storeIcon from "../../../assets/images/icons/store.svg";
import verifyIcon from "../../../assets/images/icons/verify.svg";

const ShopAccount: FC = (): JSX.Element => {
  return (
    <div className=" rounded-lg bg-gray-dark h-[100%] p-[15px] flex flex-col justify-between">
      <img src={shop} alt="" className="w-[100%] h-[85px] rounded-lg inline-block object-cover" />
      <div className="">
        <div className="h-[25px] bg-gray-dark flex gap-2 items-center mt-[5px] ">
          <img src={storeIcon} alt="" className="h-[100%] w-[15px]" />
          <span className="text-white block">Mawar shop</span>
          <img src={verifyIcon} alt="" className="h-[100%] w-[15px]" />
          <div className="ms-auto flex gap-2 items-center">
            <div className="w-[7px] h-[7px] bg-green-lawn rounded-full" />
            <span className="text-green-lawn block">Online</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="text-white bg-blue-dark rounded-[20px]">
          Follow +
        </button>
        <button className="text-white bg-gray-dark border-2 border-blue-dark rounded-[20px] flex items-center justify-center gap-2">
          Chat
          <img src={chatIcon} alt="" className="w-[15px] h-[15px]" />
        </button>
      </div>
    </div>
  );
};

export { ShopAccount };
