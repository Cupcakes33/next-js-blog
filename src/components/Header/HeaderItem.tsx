import Link from "next/link";
import React from "react";

import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  path: string;
  active: boolean;
};

export default function HeaderItem({ label, path, active }: Props) {
  return (
    <Link
      href={path}
      className={twMerge(
        `text-md font-medium cursor-pointer hover:text-neutral-700 transition text-neutral-400 py-1`,
        active && "text-neutral-700"
      )}
    >
      <p className="w-full truncate">{label}</p>
    </Link>
  );
}
