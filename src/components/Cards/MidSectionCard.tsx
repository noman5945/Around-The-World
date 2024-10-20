import Image from "next/image";
import React from "react";
import defaultpic from "/public/MidSecPic1.jpg";

interface IMidSectionCardProps {
  title: string;
  description: string;
  img?: string;
}

export default function MidSectionCard({
  title,
  description,
  img,
}: IMidSectionCardProps) {
  return (
    <div className=" border-2 flex flex-col items-center p-3 rounded-md shadow-md">
      <h2 className=" font-semibold  my-2 text-xl">{title}</h2>
      <hr className=" h-[5px] p-2 w-full" />
      <div className=" rounded-md my-2">
        <Image
          src={img ? img : defaultpic}
          alt=""
          className=" rounded-md"
        ></Image>
      </div>
      <div className=" text-center">
        <p className=" text-lg">{description}</p>
      </div>
    </div>
  );
}
