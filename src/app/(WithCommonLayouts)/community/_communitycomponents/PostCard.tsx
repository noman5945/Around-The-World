"use client";
import CommentsIcon from "@/components/Icons/CommentsIcon";
import LikeIcon from "@/components/Icons/LikeIcon";
import { Avatar, Button } from "@nextui-org/react";
import React, { useState } from "react";

export default function PostCard() {
  const [showComments, setShowComments] = useState(false);
  const handleShowComments = () => {
    setShowComments(!showComments);
  };
  console.log(showComments);
  return (
    <div className="  w-full lg:w-[50%] mx-0 lg:mx-[25%] flex flex-col">
      <div className="p-1 border rounded-md shadow-md">
        <div className=" flex flex-row p-2 items-start gap-2 border-b-1  bg-slate-100">
          <div>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="md"
            />
          </div>
          <div className=" flex flex-col gap-1 p-0">
            <h3 className=" font-bold text-lg">user name</h3>
            <p className=" font-light text-base">Date</p>
          </div>
        </div>
        <div className=" p-2 flex flex-col ">
          <div>Text Post</div>
          <div>Pics?</div>
        </div>
        <div className=" p-2 flex flex-row gap-2 border-t-1">
          <div className=" flex items-center gap-2 w-1/2">
            <Button variant="flat" color="primary" className=" rounded-full">
              <LikeIcon />
            </Button>
            <span>15</span>
          </div>
          <div className=" flex items-center gap-2 w-1/2">
            <Button
              className=" rounded-full"
              variant="flat"
              color="success"
              onClick={handleShowComments}
            >
              <CommentsIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className={showComments ? " flex" : " hidden"}>comments</div>
    </div>
  );
}
