"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

interface AvatarDropdownProps {
  userName: string;
  userEmail: string;
  logOutFunc?: () => void;
}

export default function AvatarDropdown({
  userName,
  userEmail,
  logOutFunc,
}: AvatarDropdownProps) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={userName}
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{userEmail}</p>
        </DropdownItem>
        <DropdownItem key="settings">Profile</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={logOutFunc}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
