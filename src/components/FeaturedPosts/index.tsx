import { getAllPosts, getAllCategories, getFeaturedPosts } from "@/service/post";
import Link from "next/link";
import React from "react";

export default async function FeaturedPosts() {
  
  const posts = await getFeaturedPosts();
  

  return (
    <section className="mt-16">
      <h1 className="mb-6 text-3xl font-bold text-neutral-700">
        Featured Posts
      </h1>

      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <Link href={post.slug}>{post.slug}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
