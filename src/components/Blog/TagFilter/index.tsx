"use client";
import { Post } from "@/service/post";
import React, { useState } from "react";
import PostsGrid from "../PostsGrid";
import Tags from "./Tags";

type Props = {
  tags: string[];
  posts: Post[];
};

export default function TagFilter({ tags, posts }: Props) {
  const [selectTag, setSelectTag] = useState("All Posts");
  const tagsLength = tags.length - 1;
  const filteredPosts =
    selectTag === "All Posts"
      ? posts
      : posts.filter((post) => {
          return post.tag.includes(selectTag);
        });

  return (
    <>
      <div className="relative flex flex-row items-end gap-2 mb-3">
        <h3 className="text-3xl font-bold text-neutral-700">Tags</h3>
        <span className="text-sm text-neutral-400">{`(${tagsLength})`}</span>
      </div>
      <ul className="flex flex-row space-x-2">
        <Tags tags={tags} onClick={setSelectTag} />
      </ul>
      <PostsGrid posts={filteredPosts} />
    </>
  );
}
