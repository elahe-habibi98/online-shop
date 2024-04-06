import { FC } from "react";
import { Navbar } from "../Navbar";
import { Categories } from "./Categories";
import { Filters } from "./Filters";
import { Content } from "./Content";

const LandingComponent: FC = (): JSX.Element => {
  return (
    <div
    // className="bg-black-light"
    >
      {/* Header Section */}
      <div className="bg-black-light">
        <Navbar />
        <Categories />
      </div>

      {/* Body Section */}
      <div className="border border-green-500 grid grid-cols-8 gap-4">
        <Filters />
        <Content />
      </div>
    </div>
  );
};

export { LandingComponent };
