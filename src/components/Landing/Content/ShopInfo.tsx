import { FC } from "react";
import chatIcon from "../../../assets/images/icons/commentGray.svg";
import productIcon from "../../../assets/images/icons/product.svg";
import ratingIcon from "../../../assets/images/icons/starLined.svg";
import followingsIcon from "../../../assets/images/icons/user.svg";
import joinIcon from "../../../assets/images/icons/userJoined.svg";
import followersIcon from "../../../assets/images/icons/userMultiple.svg";

type TInfo = {
  icon: string;
  label: string;
  value: string;
};

const ShopInfo: FC = (): JSX.Element => {
  const info: TInfo[] = [
    { icon: productIcon, label: "Products", value: "600" },
    { icon: followersIcon, label: "Followers", value: "40.5K" },
    { icon: followingsIcon, label: "Followings", value: "1.5K" },
    { icon: ratingIcon, label: "Rating", value: "4.9" },
    { icon: chatIcon, label: "Chat performance", value: "93%" },
    { icon: joinIcon, label: "Joined", value: "4 years ago" },
  ];
  return (
    <div className=" col-span-5 rounded-lg bg-gray-dark grid grid-cols-2 py-[10px] px-[15px]">
      <div className=" flex flex-col justify-between lg:ms-5px">
        {info.slice(0, 3).map((m: TInfo, index: number) => (
          <div key={index} className="flex gap-2 items-center ">
            <img src={m.icon} alt="" className="h-[15px] w-[15px]" />
            <span className="text-white-dark">
              {m.label}: <span className="text-blue-sky">{m.value}</span>{" "}
            </span>
          </div>
        ))}
      </div>
      <div className=" flex flex-col justify-between">
        {info.slice(3, 6).map((m: TInfo, index: number) => (
          <div key={index} className="flex gap-2 items-center ">
            <img src={m.icon} alt="" className="h-[15px] w-[15px]" />
            <span className="text-white-dark">
              {m.label}: <span className="text-blue-sky">{m.value}</span>{" "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ShopInfo };
