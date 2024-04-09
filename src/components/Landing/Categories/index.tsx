import { FC } from "react";
import clothingIcon from "../../../assets/images/icons/clothing.svg";
import skincareIcon from "../../../assets/images/icons/skincare.svg";

const Categories: FC = (): JSX.Element => {
  return (
    <div className=" flex gap-5 border-y-4 border-gray-dark my-[15px] py-[10px] px-[20px] text-white ">
      <div className="h-[25px] bg-gray-dark flex gap-2 items-center rounded-[20px]  px-[10px] py-[5px]">
        <img src={clothingIcon} alt="" className="h-[100%]" />
        <span className="cursor-pointer block">Clothing</span>
      </div>
      {/* <div className="h-[25px] bg-gray-dark flex gap-2 items-center rounded-[20px] px-[10px] py-[5px]">
        <img src={jewelryIcon} alt="" className="h-[100%]" />
        <span className="cursor-pointer block">Jewelry</span>
      </div> */}
      <div className="h-[25px] bg-gray-dark flex gap-2 items-center rounded-[20px] px-[10px] py-[5px]">
        <img src={skincareIcon} alt="" className="h-[100%]" />
        <span className="cursor-pointer block">Skincare</span>
      </div>
    </div>
  );
};

export { Categories };
