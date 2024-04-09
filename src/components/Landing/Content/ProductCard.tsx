import { FC } from "react";
import starIcon from "../../../assets/images/icons/starFilled.svg";

interface IProductCardProp {
  index: number;
  item: string;
}

const ProductCard: FC<IProductCardProp> = ({ index, item }): JSX.Element => {
  return (
    <div
      key={index}
      className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 h-[250px] mb-[10px]"
    >
      <div className="me-[10px] rounded-lg bg-gray-dark h-[100%] overflow-hidden relative">
        <div className="bg-black px-[8px] py-[3px] absolute top-[15px] left-[15px] flex items-center gap-1 rounded-[20px]">
          <img src={starIcon} alt="" className="w-[12px] h-[12px] " />
          <span className="text-white-dark text-sm">4.5</span>
        </div>

        <img src={item} alt="" className="w-[100%] h-[60%] object-cover" />
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
  );
};

export { ProductCard };
