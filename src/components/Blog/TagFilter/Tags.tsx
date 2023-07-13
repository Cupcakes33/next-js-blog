import React from "react";

type Props = {
  tags: string[];
  onClick?: (tag: string) => void;
};

export default function Tags({ tags, onClick }: Props) {
  return tags.map((tag) => {
    return (
      <li
        key={tag}
        className="px-2 py-0.5 text-neutral-500 rounded-xl bg-neutral-200"
        onClick={() => onClick && onClick(tag)}
      >
        {tag}
      </li>
    );
  });
}
