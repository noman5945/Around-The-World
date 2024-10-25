"use client";
import ImageIcon from "@/components/Icons/ImageIcon";
import LocationIcon from "@/components/Icons/LocationIcon";
import { Avatar, Button } from "@nextui-org/react";
import React from "react";

export default function CreatePost() {
  return (
    <div className=" p-1 border rounded-md shadow-md w-full lg:w-[50%] mx-0 lg:mx-[25%] flex flex-col">
      <div className=" flex flex-row gap-2 p-1">
        <div>
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="md"
          />
        </div>
        <div className=" w-full rounded-md bg-slate-50 border cursor-pointer hover:bg-white transition-all">
          <h3 className=" font-light p-1">Post Your Experience here</h3>
        </div>
      </div>
      <div className=" flex flex-row gap-2 p-2">
        <div className=" flex flex-row justify-center w-1/2">
          {" "}
          <Button variant="flat" color="primary" className=" w-full">
            <ImageIcon /> <span>Post Pictures</span>
          </Button>{" "}
        </div>
        <div className=" flex flex-row justify-center w-1/2">
          <Button variant="flat" color="danger" className=" w-full">
            <LocationIcon /> <span>Post Place</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
