import { NavBar } from "@/components/NavBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-screen flex flex-col relative">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
