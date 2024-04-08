import { FC } from "react";
import { Accordion } from "./Accordion";

const Filters: FC = (): JSX.Element => {
  const accordionData = [
    {
      title: "Category",
      content: ["Cleanser","Toner","Serum","Moisturizer","Face mask",],
    },
    {
      title: "Price",
      content: "aloooo",
    },
    {
      title: "Location",
      content: "borooooo",
    },
    {
      title: "Rating",
      content: "borooooo",
    },
    {
      title: "Shipping",
      content: "borooooo",
    },
    {
      title: "Payment",
      content: "borooooo",
    },
  ];
  return (
    <div className="border col-span-2">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};

export { Filters };
