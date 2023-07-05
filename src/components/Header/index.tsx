"use client";

import { usePathname } from "next/navigation";
import LinkItem from "../LinkItem";
import ROUTES from "@/helper/routes";
import { FcLikePlaceholder } from "react-icons/fc";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between w-full pt-4 pb-8 select-none">
      <LinkItem icon={FcLikePlaceholder} label="Home" path="/" />
      <div className="flex flex-row items-start gap-x-7">
        {ROUTES.map((route) => (
          <LinkItem
            key={route.path}
            active={pathname === route.path}
            {...route}
          />
        ))}
      </div>
    </nav>
  );
}
