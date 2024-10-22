"use client";
import Image from "next/image";
import React from "react";
import defaultPic from "/public/mt-fuji-japan-thumbnail.webp";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface ICountryCardProps {
  id: number | string;
  countryName: string;
  imgString: string;
  bgImg?: string;
}

export default function CountryCard({
  countryName,
  imgString,
  bgImg,
  id,
}: ICountryCardProps) {
  const routes = useRouter();
  const handleChangePage = (link: string) => {
    routes.push(link);
  };
  return (
    <div className="relative rounded-md shadow-md transition-all cursor-pointer overflow-hidden group">
      <div className="w-[300px] h-[400px]">
        <Image
          src={bgImg ? bgImg : defaultPic}
          alt="countrypic"
          fill
          className="rounded-md transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-white">{countryName}</p>
        <div className=" w-[60px] h-[60px]">
          <Image src={imgString} alt="" height={60} width={60} />
        </div>
        <div>
          <Button
            variant="shadow"
            color="primary"
            size="md"
            onClick={() => handleChangePage(`country/${id}`)}
          >
            Lets Go!
          </Button>
        </div>
      </div>
    </div>
  );
}
