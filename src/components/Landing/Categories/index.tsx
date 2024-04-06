import { FC } from "react";

const Categories: FC = (): JSX.Element => {
  return (
    <div className=" flex gap-1 border border-red-500">
      <div className="h-[25px] border">clothing</div>
      <div className="h-[25px] border">jewelry</div>
      <div className="h-[25px] border">skincare</div>
    </div>
  );
};

export { Categories };
