import Intro from "@/components/Intro";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="relative">
      <Intro/>
      <div className="flex items-center justify-center w-full">
        <Profile />
      </div>
    </main>
  );
}
