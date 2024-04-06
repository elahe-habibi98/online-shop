import { FC } from "react";
import clothingIcon from "../../../assets/images/icons/clothing.svg";
import jewelryIcon from "../../../assets/images/icons/jewelry.svg";
import skincareIcon from "../../../assets/images/icons/skincare.svg";

const Categories: FC = (): JSX.Element => {
  return (
    <div className=" flex gap-5 border-y-4 border-gray-dark my-[15px] py-[10px] px-[20px] text-white ">
      <div className="h-[25px] bg-gray-dark flex gap-2 items-center rounded-[20px]  px-[10px] py-[5px]">
        <img src={clothingIcon} className="h-[100%]" />
        <p>Clothing</p>
      </div>
      <div className="h-[25px] bg-gray-dark flex gap-2 items-center rounded-[20px] px-[10px] py-[5px]">
        <img src={jewelryIcon} className="h-[100%]" />
        <p>Jewelry</p>
      </div>
      <div className="h-[25px] bg-gray-dark flex gap-2 items-center rounded-[20px] px-[10px] py-[5px]">
        <img src={skincareIcon} className="h-[100%]" />
        <p>Skincare</p>
      </div>
    </div>
  );
};

export { Categories };
