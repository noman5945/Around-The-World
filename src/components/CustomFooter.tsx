import React from "react";
import FooterSocials from "./Cards/FooterSocials";
import instagramSocial from "../../public/instagram.png";
import githubSocial from "../../public/github.png";
import YTSocial from "../../public/youtube.png";

export default function CustomFooter() {
  return (
    <div className=" w-full border-t-2 flex flex-col items-center mt-[5%]">
      <div className=" text-center p-3">
        <h2 className=" font-semibold text-lg lg:text-2xl">Around the World</h2>
      </div>
      <div className=" p-2 my-4 text-center">
        <p>Get Connected</p>
        <div className=" grid grid-cols-4 gap-2">
          <FooterSocials />
          <FooterSocials image={instagramSocial} />
          <FooterSocials image={githubSocial} />
          <FooterSocials image={YTSocial} />
        </div>
      </div>
      <div className=" w-full flex flex-row justify-between border-1 p-2 mx-0">
        <div className=" flex flex-row gap-2">
          <p className=" cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
          <p className="cursor-pointer">Cookie Policy</p>
        </div>
        <div>
          <p>
            <span>&copy;</span>2024 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
