import { Post } from "@/service/post";
import Image from "next/image";
import React from "react";
import Tags from "../TagFilter/Tags";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ClockIcon from "@/components/icons/ClockIcon";
type Props = {
  post: Post;
  isLast: boolean;
};

export default function PostContents({ post, isLast }: Props) {
  return (
    <>
      <li key={post.slug} className="px-4 py-8">
        <div className="flex flex-row gap-4">
          <div className="relative w-32 h-32 overflow-hidden rounded-md">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between w-full text-neutral-700">
            <div>
              <h4 className="text-xl font-bold">{post.title}</h4>
              <p>{post.description}</p>
            </div>
            <div className="flex flex-row justify-between w-full">
              <ul className="flex flex-row space-x-2">
                <Tags tags={post.tag} />
              </ul>
              <div className="flex gap-2">
                <p className="flex items-center">
                  <CalendarIcon />
                  {post.date}
                </p>
                <p className="flex items-center">
                  <ClockIcon />
                  {post.readingTime}분
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      {!isLast && <hr />}
    </>
  );
}
