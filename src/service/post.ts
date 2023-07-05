
import { sync } from "glob";
import path from "path";

const BASE_PATH = "data/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = async () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/*.md`);
  console.log(postPaths);
  return postPaths.map((path) => {
    return {
      slug: path.slice(path.indexOf(BASE_PATH)).replace(".md", ""),
    };
  });
};
