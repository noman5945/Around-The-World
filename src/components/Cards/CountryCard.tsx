import Image from "next/image";
import React from "react";
import defaultPic from "/public/mt-fuji-japan-thumbnail.webp";

export default function CountryCard() {
  return (
    <div className="relative rounded-md shadow-md transition-all cursor-pointer overflow-hidden group">
      <div className="w-[300px] h-[400px]">
        <Image
          src={defaultPic}
          alt="countrypic"
          fill
          className="rounded-md transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-white">Country Name</p>
      </div>
    </div>
  );
}
