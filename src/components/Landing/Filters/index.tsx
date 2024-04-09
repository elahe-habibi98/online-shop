import { FC } from "react";
import { Accordion } from "./Accordion";
import { accordionData } from "./AccordionData";

const Filters: FC = (): JSX.Element => {
  return (
    <div className="border col-span-2">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};

export { Filters };
