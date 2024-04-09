type TAccordionData = { title: string; content: string[] };

export const accordionData: TAccordionData[] = [
  {
    title: "Category",
    content: [
      "Clothing",
      "Skincare",
      "Shoes",
      "Crafts",
      "Household",
      "Electronics",
    ],
  },
  {
    title: "Price",
    content: ["High to low", "Low to high"],
  },
  {
    title: "Location",
    content: ["Nearest", "Farhest"],
  },
  {
    title: "Rating",
    content: ["Highest", "Lowest"],
  },
  {
    title: "Shipping",
    content: ["Regulare", "Next day", "Same day"],
  },
  {
    title: "Payment",
    content: ["Cash", "Credit card"],
  },
];
