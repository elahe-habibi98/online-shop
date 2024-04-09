import { FC } from "react";
interface ITabProp {
  isActive: boolean;
  tabData:{label:string,icon:string}
  onClick: any;
}

const Tab: FC<ITabProp> = ({ isActive,tabData, onClick }): JSX.Element => {
  return (
    <div className={`tab ${isActive ? "active" : ""} text-gray-light p-[10px] cursor-pointer text-lg `} onClick={onClick}>
      <span className="hidden md:block">{tabData.label}</span>
      <img src={tabData.icon} alt="" className="block md:hidden"/>
    </div>
  );
};

export { Tab };
