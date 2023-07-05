"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeartIcon from "../icons/HeartIcon";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

export default function Header() {
  const pathname = usePathname();
  const routes = React.useMemo(
    () => [
      {
        icon: null,
        label: "Blog",
        path: "/",
        active: pathname === "/",
      },
      {
        icon: null,
        label: "About",
        path: "/about",
        active: pathname === "/about",
      },
      {
        icon: null,
        label: "Posts",
        path: "/posts",
        active: pathname === "/posts",
      },
    ],
    [pathname]
  );

  return (
    <nav className="flex justify-between w-full pt-4 pb-8 select-none">
      <Link href="/">
        <HeartIcon />
      </Link>
      <div className="flex flex-row items-start gap-x-7">
        {routes.map((route) => (
          <HeaderItem key={route.path} {...route} />
        ))}
      </div>
    </nav>
  );
}
