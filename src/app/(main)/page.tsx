import Intro from "@/components/Intro";
import LottieAnimation from "@/components/LottieAnimation";

export default async function Home() {
  return (
    <main className="relative pb-16">
      <div className="flex items-center justify-between">
        <Intro />
        <LottieAnimation.MainPage />
      </div>
    </main>
  );
}
