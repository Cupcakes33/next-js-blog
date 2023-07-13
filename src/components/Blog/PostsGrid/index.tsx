import { Post } from "@/service/post";
import PostContents from "./PostContents";

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post, i) => {
        return (
          <PostContents
            post={post}
            key={post.slug}
            isLast={i === posts.length - 1}
          />
        );
      })}
    </ul>
  );
}
