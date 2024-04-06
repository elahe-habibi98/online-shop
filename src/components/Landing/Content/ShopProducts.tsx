import { FC } from "react";

const ShopProducts: FC = (): JSX.Element => {
  return (
    <div className="mt-[30px] border border-black grid grid-cols-4 gap-4">
      <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
      <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
      <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
      <div className=" rounded-lg bg-gray-dark h-[250px]"></div>
    </div>
  );
};

export { ShopProducts };
