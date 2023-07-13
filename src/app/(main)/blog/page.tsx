import TagFilter from "@/components/Blog/TagFilter";
import { getAllPosts } from "@/service/post";
import getTags from "@/util/getTags";
import React from "react";

export default async function BlogPage() {
  const posts = await getAllPosts();
  const tags = ["All Posts", ...getTags(posts)];

  return (
    <section className="max-w-2xl mx-auto">
      <TagFilter posts={posts} tags={tags} />
    </section>
  );
}
