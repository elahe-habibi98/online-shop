import craftIcon from "../../../../assets/images/icons/tab/craft.svg";
import clothIcon from "../../../../assets/images/icons/tab/dress.svg";
import electronicIcon from "../../../../assets/images/icons/tab/electronics.svg";
import houseIcon from "../../../../assets/images/icons/tab/house.svg";
import menuIcon from "../../../../assets/images/icons/tab/menu.svg";
import shoesIcon from "../../../../assets/images/icons/tab/shoes.svg";
import skincareIcon from "../../../../assets/images/icons/tab/soap.svg";

type TTabData = { label: string; icon: string };

export const tabData: TTabData[] = [
  { label: "All Products", icon: menuIcon },
  { label: "Clothing", icon: clothIcon },
  { label: "Skincare", icon: skincareIcon },
  { label: "Shoes", icon: shoesIcon },
  { label: "Crafts", icon: craftIcon },
  { label: "Household", icon: houseIcon },
  { label: "Electronics", icon: electronicIcon },
];
