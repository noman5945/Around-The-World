"use client";
import MidSectionCard from "@/components/Cards/MidSectionCard";
import { midSectionCardContents } from "@/constants";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function MidSection() {
  const routes = useRouter();
  const handleGoSignUp = () => {
    routes.push("/signUp");
  };
  return (
    <div className=" flex flex-col items-center mt-[3%]">
      <h2 className=" text-2xl lg:text-3xl font-semibold my-2 text-blue-700">
        Join the Community
      </h2>
      <div className=" my-3 ">
        <p className=" font-normal text-lg">
          We are not just a infohub. We are a family.
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2 mx-0 my-3">
        {midSectionCardContents.map((content: any, index: any) => {
          return (
            <MidSectionCard
              key={content.id}
              title={content.title}
              description={content.description}
              img={content.imgsrc}
            />
          );
        })}
      </div>
      <div className=" my-2">
        <Button
          variant="shadow"
          color="primary"
          size="lg"
          onClick={handleGoSignUp}
        >
          JOIN US
        </Button>
      </div>
    </div>
  );
}
