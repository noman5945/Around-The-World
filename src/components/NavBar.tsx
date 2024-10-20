"use client";
import { navBarItems } from "@/constants";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";
import AvatarDropdown from "./AvatarDropdown";
import { IUser } from "@/types/user.type";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState<IUser | null>({
    name: "Lina",
    email: "abc@gmail.com",
  });
  const routes = useRouter();

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleRouteChange = (routeName: string) => {
    routes.push(routeName);
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuOpen}
      className=" shadow-md backdrop-saturate-200 bg-white/30"
    >
      <NavbarContent className=" md:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarBrand onClick={() => handleRouteChange("/")}>
        <p className="font-bold text-inherit cursor-pointer">
          Around The World
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navBarItems.map((items, index) => {
          return (
            <NavbarItem key={index} isActive={pathname === items.route}>
              <Button
                color={pathname === items.route ? `primary` : `default`}
                onClick={() => handleRouteChange(items.route)}
                aria-current="page"
                variant="light"
                className={
                  pathname === items.route ? " border-b-2 border-blue-700" : ""
                }
              >
                <p className=" font-light text-lg">{items.name}</p>
              </Button>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          {user ? (
            <AvatarDropdown
              userEmail={user.email}
              userName={user.name}
              logOutFunc={() => handleLogOut()}
            />
          ) : (
            <Button
              className="  text-white"
              color="primary"
              onClick={() => handleRouteChange("/login")}
            >
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navBarItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Button
              size="lg"
              variant="flat"
              className=" w-full"
              onClick={() => handleRouteChange(item.route)}
            >
              <p className=" font-semibold text-blue-700">{item.name}</p>
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
