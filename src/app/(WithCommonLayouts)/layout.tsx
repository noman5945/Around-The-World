import CustomFooter from "@/components/CustomFooter";
import { NavBar } from "@/components/NavBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <NavBar />
      <main>{children}</main>
      <CustomFooter />
    </div>
  );
}
