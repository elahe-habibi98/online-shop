import { FC } from "react";
import whatsappIcon from "../../../assets/images/icons/whatsapp.svg";
import instagramIcon from "../../../assets/images/icons/instagram.svg";
import facebookIcon from "../../../assets/images/icons/facebook.svg";
import pinterestIcon from "../../../assets/images/icons/pinterest.svg";
import youtubeIcon from "../../../assets/images/icons/youtube.svg";

type TContact = {
  icon: string;
  value: string;
};

const ShopContact: FC = (): JSX.Element => {
  const contact: TContact[] = [
    { icon: whatsappIcon, value: "+629817239012" },
    { icon: instagramIcon, value: "mwrshop" },
    { icon: facebookIcon, value: "mwrshop" },
    { icon: pinterestIcon, value: "mwrshop" },
    { icon: youtubeIcon, value: "reviewmwrshop" },
  ];
  return (
    <div className=" rounded-lg bg-gray-dark flex justify-between px-[15px]">
      {contact.map((m: TContact, index: number) => (
        <>
          <div key={index} className="flex gap-2 items-center ">
            <img src={m.icon} alt="" className="h-[15px] w-[15px] block" />
            <span className="text-white-dark block">{m.value}</span>
          </div>
          {index !== contact.length - 1 && (
            <div className="flex items-center mx-auto">
              <div className=" h-[15px] bg-white mx-auto border border-gray-light" />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export { ShopContact };
