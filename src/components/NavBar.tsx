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
      className=" shadow-md "
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
              <Link
                color={pathname === items.route ? `primary` : `foreground`}
                href={items.route}
                aria-current="page"
              >
                {items.name}
              </Link>
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
              className=" bg-black text-white"
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
            <Link className="w-full" href={item.route} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
