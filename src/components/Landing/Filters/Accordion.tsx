import { FC, useState } from "react";
import arrowIcon from "../../../assets/images/icons/arrowDown.svg"

interface IAccordionProp {
  title: string;
  content: any;
}

const Accordion: FC<IAccordionProp> = ({ title, content }): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <div className="flex gap-1 items-center" onClick={() => setIsActive(!isActive)}>
        <span className="text-white-dark text-base">{title}</span>
        <img src={arrowIcon} className="block pt-[5px] w-[12px] h-[12px]" />
      </div>
      {isActive && <div className="my-[5px] text-gray-light text-sm">{content}</div>}
    </div>
  );
};

export { Accordion };
