import { FC } from "react";
import filterIcon from "../../assets/images/icons/filter.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import coinsIcon from "../../assets/images/icons/coins.svg";
import heartIcon from "../../assets/images/icons/heart.svg";
import cartIcon from "../../assets/images/icons/cart.svg";
import notificationIcon from "../../assets/images/icons/notification.svg";
import menuIcon from "../../assets/images/icons/menu.svg";
import userPic from "../../assets/images/userPic.jpg";

// import logoImg from "@assets/images/logo.png";

const Navbar: FC = (): JSX.Element => {
  const coins: number = 2500782;
  // bg-black-light
  return (
    <div className="flex gap-10 px-[20px] py-[5px] pt-[10px]">
      <div className="w-[100px] h-[30px]">
        <span className="font-bold text-2xl text-white">Blon</span>
        <span className="text-blue-navy italic font-bold text-2xl">djoe</span>
      </div>
      <div className="flex items-center bg-gray-dark rounded-[20px] px-[8px]">
        <div className="w-[13px] me-[10px]">
          <img src={searchIcon} />
        </div>
        <input
          name="search"
          placeholder="Search"
          className="custom-input"
          style={{ outline: "none", backgroundColor: "#35363A" }}
        />
        <div className="w-[15px] me-[5px]">
          <img src={filterIcon} />
        </div>
      </div>
      <div className="bg-gray-dark flex items-center px-[10px] rounded-[20px] ms-[10px]">
        <div className="w-[15px] me-[5px]">
          <img src={coinsIcon} />
        </div>
        <p className="text-blue-sky text-sm">Coin : {coins.toLocaleString()}</p>
      </div>

      <div className="ms-auto flex items-center gap-3 ms-[10px]">
        <div className="w-[25px] rounded-full p-[5px] ">
          <img src={heartIcon} />
        </div>
        <div className="w-[25px] rounded-full p-[5px]">
          <img src={cartIcon} />
        </div>
        <div className="w-[25px] rounded-full p-[5px]">
          <img src={notificationIcon} />
        </div>
        <div className=" h-[15px] bg-white mx-[5px] border border-gray-light" />
        <div className="w-[25px] rounded-full p-[5px]">
          <img src={menuIcon} />
        </div>
        <div className="w-[35px]">
          <img src={userPic} className="w-100 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
