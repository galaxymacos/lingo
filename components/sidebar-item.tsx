"use client";

import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export default function SidebarItem({ label, iconSrc, href }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      className="justify-start h-[52px]"
      variant={active ? "sidebarOutline" : "sidebar"}
    >
      <Image
        src={iconSrc}
        width={32}
        height={32}
        alt={label}
        className="mr-5"
      />
      {label}
    </Button>
  );
}
