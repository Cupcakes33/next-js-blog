import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  icon: IconType | null;
  label: string;
  path: string;
  active: boolean;
};

export default function HeaderItem({ icon: Icon, label, path, active }: Props) {
  return (
    <Link
      href={path}
      className={twMerge(
        `text-md font-medium cursor-pointer hover:text-neutral-700 transition text-neutral-400 py-1`,
        active && "text-neutral-700"
      )}
    >
      {Icon && <Icon size={26} />}
      <p className="w-full truncate">{label}</p>
    </Link>
  );
}
