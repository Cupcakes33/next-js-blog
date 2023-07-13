import React from "react";
import LinkItem from "../LinkItem";
import ABOUTS from "@/helper/abouts";

export default function Footer() {
  return (
    <footer className="pb-8 text-sm text-neutral-400">
      <hr className="w-full mb-8 border-1 border-neutral-200" />
      <div className="flex flex-col items-end space-y-1">
        <div className="flex space-x-2">
          {ABOUTS.map((about) => (
            <LinkItem key={about.label} size={22} {...about} isExternal />
          ))}
        </div>
        <p>© 2023 Universe Blog. Powered by Next.js, Hosted on Vercel</p>
      </div>
    </footer>
  );
}
