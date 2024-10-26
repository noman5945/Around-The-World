"use client";
import CommentsIcon from "@/components/Icons/CommentsIcon";
import LikeIcon from "@/components/Icons/LikeIcon";
import LocationIcon from "@/components/Icons/LocationIcon";
import SendIcon from "@/components/Icons/SendIcon";
import { Avatar, Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

export default function PostCard() {
  const [showComments, setShowComments] = useState(false);
  const handleShowComments = () => {
    setShowComments(!showComments);
  };

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
        <div className=" p-2 flex flex-col w-fit ">
          <div className=" flex flex-row items-center p-1 text-sm rounded-full bg-teal-200">
            <div>
              <LocationIcon />
            </div>{" "}
            <span>Country Name</span>
          </div>
          <div>Text Post</div>
          <div className=" p-1">Pics?</div>
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
      <div
        className={showComments ? " flex flex-col w-[90%] ml-[10%]" : " hidden"}
      >
        <p className=" text-lg font-light my-1">Comments</p>
        <div className=" my-2 border-1 rounded-md shadow-sm">
          <div className=" flex flex-row gap-2 p-2 border-b-1 w-full">
            <div>
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                size="md"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <p>Name</p>
              <p>Date</p>
            </div>
          </div>
          <div className=" p-2 border-b-1 w-full">
            <p>Comment</p>
          </div>
          <div className=" p-2 flex flex-row gap-2 items-center">
            <Button variant="flat" color="primary" className=" rounded-full">
              <LikeIcon />
            </Button>
            <span>15</span>
          </div>
        </div>
        <div className=" flex flex-row gap-1 p-1">
          <div>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="md"
            />
          </div>
          <div className=" w-[90%]">
            <Input type="text" placeholder="Post a comment" />
          </div>
          <div>
            <Button variant="flat" color="success" className=" rounded-full">
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
