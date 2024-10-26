import React from "react";
import CreatePost from "./_communitycomponents/CreatePost";
import PostCard from "./_communitycomponents/PostCard";

export default function page() {
  return (
    <div className=" container mx-0 p-4 my-3">
      <div className=" flex flex-col items-center gap-3 w-full">
        <div className=" w-full">
          <CreatePost />
        </div>
        <div className=" flex flex-col gap-3 w-full items-center mt-2">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
