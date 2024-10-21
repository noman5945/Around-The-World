import CountryCard from "@/components/Cards/CountryCard";
import { Button } from "@nextui-org/react";
import React from "react";

export default function CountriesSection() {
  return (
    <div className=" my-3 p-2 flex flex-col items-center  mt-[3%]">
      <div className=" text-center">
        <h2 className=" text-2xl lg:text-3xl font-semibold my-2 text-blue-700">
          Destinations
        </h2>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3 mx-3 my-3">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
      <div className=" my-3 p-2">
        <Button variant="shadow" size="lg" color="primary">
          MORE DESTINATIONS
        </Button>
      </div>
    </div>
  );
}
