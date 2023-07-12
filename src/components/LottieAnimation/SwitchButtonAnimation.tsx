"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import useSwitchButton from "@/hooks/useSwitchButton";

const SwtichButtonAnimation = () => {
  const { isPlaying, handleSwitch, lottieRef } = useSwitchButton();
  return (
    <span className="cursor-pointer " onClick={handleSwitch}>
      <Player
        speed={3}
        autoplay={false}
        loop={false}
        controls={false}
        keepLastFrame={isPlaying}
        lottieRef={(ref) => {
          if (ref) lottieRef.current = ref;
        }}
        src="/lotties/switch_button.json"
        style={{ width: 50, height: 30 }}
      />
    </span>
  );
};

export default SwtichButtonAnimation;
