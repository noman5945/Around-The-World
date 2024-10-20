"use client";
import { carouselItems } from "@/constants";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import ChevronLeft from "../Icons/ChevronLeft";
import ChevronRight from "../Icons/ChevronRight";

export default function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );

  const handleNext = () =>
    setActiveIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );

  return (
    <div className=" relative w-full h-[500px] rounded-md shadow-md">
      {carouselItems.map((item: any, index: number) => {
        return (
          <div
            key={item.id}
            className={`absolute rounded-md inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
            {/* Dialogue Box */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-white mb-4 text-xl lg:text-3xl font-bold">
                {item.title}
              </h1>
              <h3 className="text-white/80 mb-6">{item.description}</h3>
              <Button color="primary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        );
      })}
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={handlePrev} className="p-2 bg-black/50 rounded-full">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button onClick={handleNext} className="p-2 bg-black/50 rounded-full">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
