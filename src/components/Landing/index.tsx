import { FC } from "react";
import { Navbar } from "../Navbar";
import { Categories } from "./Categories";
import { Filters } from "./Filters";
import { Content } from "./Content";

const LandingComponent: FC = (): JSX.Element => {
  return (
    <div
    // style={{backgroundColor:"#202124"}}
    >
      {/* Header Section */}
      <Navbar />
      <Categories />

      {/* Body Section */}
      <div className="border border-green-500 grid grid-cols-8 gap-4">
        <Filters />
        <Content />
      </div>
    </div>
  );
};

export { LandingComponent };
