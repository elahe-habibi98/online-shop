import { FC } from "react";
import pic from "../../../assets/images/clothing/item1.jpg";

const ShopProducts: FC = (): JSX.Element => {
  return (
    <div className="mt-[30px] border border-black grid grid-cols-4 gap-4">
      <div className=" rounded-lg bg-gray-dark h-[250px]">
        <img src={pic} className="w-[100%] h-[60%]" />
        <div>
          <div>
            <span>title</span>
            <span>$96.50</span>
          </div>
          <div>
            <button>Buy</button>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
        </div>
      </div>
      <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
      <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
      <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
    </div>
  );
};

export { ShopProducts };
