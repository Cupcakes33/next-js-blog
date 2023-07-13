import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  icon?: IconType;
  size?: number;
  label: string;
  path: string;
  active?: boolean;
  isExternal?: boolean;
};

export default function LinkItem({
  icon: Icon,
  size,
  label,
  path,
  active,
  isExternal,
}: Props) {
  return (
    <span
      className={twMerge(
        `text-md font-medium cursor-pointer hover:text-neutral-700 transition text-neutral-400 py-1`,
        active && "text-neutral-700"
      )}
    >
      {isExternal ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {Icon ? (
            <Icon className="hover:scale-90" size={size ?? 32} />
          ) : (
            <p className="w-full truncate">{label}</p>
          )}
        </a>
      ) : (
        <Link href={path}>
          {Icon ? (
            <Icon className="hover:scale-90" size={size ?? 32} />
          ) : (
            <p className="w-full truncate">{label}</p>
          )}
        </Link>
      )}
    </span>
  );
}
