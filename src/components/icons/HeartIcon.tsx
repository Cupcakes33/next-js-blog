import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";

type Props = {
  className?: string;
  size?: number;
};

export default function HeartIcon({ className, size }: Props) {
  return <FcLikePlaceholder size={size ?? 32} className={className} />;
}
