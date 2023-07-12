"use client";

import { usePathname } from "next/navigation";
import LinkItem from "../LinkItem";
import ROUTES from "@/helper/routes";
import { FcLikePlaceholder } from "react-icons/fc";
import LottieAnimation from "../LottieAnimation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between w-full pt-4 pb-8 select-none">
      <div className="flex flex-row items-center gap-x-7">
        <LinkItem icon={FcLikePlaceholder} label="Home" path="/" />
        {ROUTES.map((route) => (
          <LinkItem
            key={route.path}
            active={pathname === route.path}
            {...route}
          />
        ))}
      </div>
      <LottieAnimation.Switch />
    </nav>
  );
}
