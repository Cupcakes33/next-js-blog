import { Post } from "@/service/post";

const getTags = (posts: Post[]) => {
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (post.tag !== null) {
      post.tag.forEach((tag) => {
        tags.add(tag.trim());
      });
    }
  });
  return [...tags];
};

export default getTags;
