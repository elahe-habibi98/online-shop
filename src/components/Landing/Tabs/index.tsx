import { FC, useState } from "react";
import { Tab } from "./Tab";

interface ITabsProp {
  tabs: any;
}

const Tabs: FC<ITabsProp> = ({ tabs }): JSX.Element => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);
  };
  console.log("activeTab:",activeTab)

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((m: any, index: number) => (
          <Tab
            key={index}
            label={m.label}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab-1}
          />
        ))}
      </div>
      <div className="tab-content">Tab {activeTab} is Active</div>
    </div>
  );
};

export { Tabs };
