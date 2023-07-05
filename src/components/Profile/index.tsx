import ABOUTS from "@/helper/abouts";
import Image from "next/image";
import React from "react";
import LinkItem from "../LinkItem";

export default function Profile() {
  return (
    <div className="flex items-center gap-4 border-1">
      <Image
        src="/profile_image.png"
        alt="profile-image"
        width={120}
        height={120}
        className="border rounded-full"
        priority
      />
      <div>
        <h1 className="font-bold text-neutral-700">{"Universe"}</h1>
        <h3 className="text-teriary text-neutral-400">
          {"Junior Front-End Developer"}
        </h3>
        <div className="flex flex-row space-x-2">
          {ABOUTS.map((about) => (
            <LinkItem key={about.label} size={22} {...about} isExternal />
          ))}
        </div>
      </div>
    </div>
  );
}
