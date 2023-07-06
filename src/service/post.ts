import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import dayjs from "dayjs";
import readingTime from "reading-time";

const BASE_PATH = "posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

type PostMatter = {
  title: string;
  description: string;
  icon: string;
  image: string;
  category: string[];
  featured: boolean;
  date: string;
};

type Post = PostMatter & {
  slug: string;
  // content: string;
  readingTime: number;
};

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(file);
    const grayMatter = data as PostMatter;
    return {
      ...grayMatter,
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace(".md", ""),
      readingTime: Math.ceil(readingTime(content).minutes),
      // content,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getAllPosts = async () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/*.md`);
  return postPaths.map((path) => {
    return parsePost(path);
  });
};
