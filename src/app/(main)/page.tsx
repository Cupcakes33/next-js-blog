import FeaturedPosts from "@/components/FeaturedPosts";
import Intro from "@/components/Intro";

export default async function Home() {
  return (
    <main className="relative pb-16">
      <Intro />
      <FeaturedPosts />
    </main>
  );
}
