import React from "react";
import defaultpic from "../../../public/linkedin.png";
import Image, { StaticImageData } from "next/image";

interface IFooterSocialsProps {
  image?: StaticImageData;
}

export default function FooterSocials({ image }: IFooterSocialsProps) {
  return (
    <div className=" p-2 block">
      <div className=" cursor-pointer">
        <Image src={image ? image : defaultpic} alt="" />
      </div>
    </div>
  );
}
