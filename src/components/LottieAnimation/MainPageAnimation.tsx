"use client";
import { Player } from "@lottiefiles/react-lottie-player";

const MainPageAnimation = () => {
  const style = {
    width: "500px",
    height: "500px",
  };
  return <Player loop src="/lotties/main_logo.json" style={style} autoplay />;
};

export default MainPageAnimation;
