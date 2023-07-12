import Intro from "@/components/Intro";
import LottieAnimation from "@/components/LottieAnimation";

export default async function Home() {
  return (
    <main className="relative pb-16 h-[calc(100vh-210px)]">
      <div className="flex items-center justify-between h-full">
        <LottieAnimation.MainPage />
        <Intro />
      </div>
    </main>
  );
}
