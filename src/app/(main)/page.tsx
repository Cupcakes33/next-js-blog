import Intro from "@/components/Intro";
import LottieAnimation from "@/components/LottieAnimation";

export default async function Home() {
  return (
    <section className="flex items-center justify-between h-[calc(100vh-154px)]">
      <LottieAnimation.MainPage />
      <Intro />
    </section>
  );
}
