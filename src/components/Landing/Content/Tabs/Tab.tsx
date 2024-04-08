import { FC } from "react";
interface ITabProp {
  isActive: any;
  label: string;
  onClick: any;
}

const Tab: FC<ITabProp> = ({ isActive, label, onClick }): JSX.Element => {
  return (
    <div className={`tab ${isActive ? "active" : ""} text-gray-light p-[10px] cursor-pointer text-lg font-bold`} onClick={onClick}>
      {label}
    </div>
  );
};

export { Tab };
