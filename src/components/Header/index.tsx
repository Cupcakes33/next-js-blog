"use client";

import { usePathname } from "next/navigation";
import HeartIcon from "../icons/HeartIcon";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import ROUTES from "@/helper/routes";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between w-full pt-4 pb-8 select-none">
      <Link href="/">
        <HeartIcon />
      </Link>
      <div className="flex flex-row items-start gap-x-7">
        {ROUTES.map((route) => (
          <HeaderItem
            key={route.path}
            active={pathname === route.path}
            {...route}
          />
        ))}
      </div>
    </nav>
  );
}
