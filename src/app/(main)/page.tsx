import FeaturedPosts from "@/components/FeaturedPosts";
import Intro from "@/components/Intro";
import LottieAnimation from "@/components/LottieAnimation";

export default async function Home() {
  return (
    <main className="relative pb-16">
      <div className="flex items-center justify-between">
        <Intro />
        {/* <LottieAnimation.MainPage /> */}
        <LottieAnimation.Switch />
      </div>
      <FeaturedPosts />
    </main>
  );
}
