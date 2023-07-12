"use client";
import { Player } from "@lottiefiles/react-lottie-player";

const MainPageAnimation = () => {
  return (
    <Player
      loop
      src="/lotties/main_logo.json"
      style={{ width: 600, height: 600 }}
      autoplay
    />
  );
};

export default MainPageAnimation;
