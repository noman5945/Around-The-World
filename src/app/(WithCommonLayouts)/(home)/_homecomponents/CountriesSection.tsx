import CountryCard from "@/components/Cards/CountryCard";
import { countries } from "@/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function CountriesSection() {
  return (
    <div className=" my-3 p-2 flex flex-col items-center  mt-[3%]">
      <div className=" text-center">
        <h2 className=" text-2xl lg:text-3xl font-semibold my-2 text-blue-700">
          Destinations
        </h2>
        <p className=" my-2 font-normal text-lg ">So where are we going?</p>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3 mx-3 my-3">
        {countries.map((country: any) => {
          imgSrc: return (
            <CountryCard
              id={country.id}
              key={country.id}
              countryName={country.countryname}
              imgString={country.imgSrc}
              bgImg={country.bgImg}
            />
          );
        })}
      </div>
      <div className=" my-3 p-2">
        <Link href={"/destinations"}>
          <Button variant="shadow" size="lg" color="primary">
            MORE DESTINATIONS
          </Button>
        </Link>
      </div>
    </div>
  );
}
