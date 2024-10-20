import CustomCarousel from "@/components/Carousel/CustomCarousel";
import React from "react";
import MidSection from "./_homecomponents/MidSection";
import CountriesSection from "./_homecomponents/CountriesSection";

export default function Home() {
  return (
    <div className=" container mx-0  ">
      <div>
        <CustomCarousel />
      </div>
      <div className=" w-full p-2">
        <MidSection />
      </div>
      <div className=" w-full p-2">
        <CountriesSection />
      </div>
    </div>
  );
}
