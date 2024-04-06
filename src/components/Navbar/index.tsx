import { FC } from "react";
import logoImg from "../../assets/images/logo.png";
import filterIcon from "../../assets/images/filter.svg";
import searchIcon from "../../assets/images/search.svg";
import coinsIcon from "../../assets/images/coins.svg";
import heartIcon from "../../assets/images/heart.svg";
import cartIcon from "../../assets/images/cart.svg";
import notificationIcon from "../../assets/images/notification.svg";
import menuIcon from "../../assets/images/menu.svg";
import userPic from "../../assets/images/userPic.jpg";

// import logoImg from "@assets/images/logo.png";

const Navbar: FC = (): JSX.Element => {
  const coins:number = 2500782;
  return (
    <div className="flex border border-blue-500">
      <div className="w-[100px] h-[30px]">
        <img src={logoImg} className="w-100 h-100" />
      </div>
      <div className="flex items-center bg-white">
        <div className="w-[20px]">
          <img src={searchIcon} />
        </div>
        <input name="search" placeholder="Search" />
        <div className="w-[20px]">
          <img src={filterIcon} />
        </div>
      </div>
      <div className="bg-white flex items-center ms-[10px]">
        <div className="w-[20px]">
          <img src={coinsIcon} />
        </div>
        <p className="">Coin : {coins.toLocaleString()}</p>
      </div>
      <div className="bg-red flex items-center ms-[10px]">
        <div className="w-[25px] rounded-full bg-white p-[5px]">
          <img src={heartIcon} />
        </div>
        <div className="w-[25px] rounded-full bg-white p-[5px]">
          <img src={cartIcon} />
        </div>
        <div className="w-[25px] rounded-full bg-white p-[5px]">
          <img src={notificationIcon} />
        </div>
        <div className=" h-[10px] bg-white mx-[5px] border border-white" />
        <div className="w-[25px] rounded-full bg-white p-[5px]">
          <img src={menuIcon} />
        </div>
        <div className="w-[30px] rounded-full">
          <img src={userPic} className="w-100 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
