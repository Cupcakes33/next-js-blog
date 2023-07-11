"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useState } from "react";
import { AnimationItem } from "lottie-web";

const SwtichButtonAnimation = () => {
  const lottieRef = useRef<AnimationItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSwitch = () => {
    const player = lottieRef.current;
    console.log(player);
    if (player) {
      if (isPlaying) {
        player.playSegments([player.totalFrames, 0], true);
        setIsPlaying(false);
      } else {
        player.playSegments([0, player.totalFrames], true);

        setIsPlaying(true);
      }
    }
  };
  const style = {
    width: "50px",
    height: "50px",
  };
  return (
    <div>
      <Player
        autoplay={false}
        loop={false}
        controls={false}
        keepLastFrame={isPlaying}
        lottieRef={(ref) => {
          if (ref) lottieRef.current = ref;
        }}
        src="/lotties/switch_button.json"
        style={style}
        
      />
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
};

export default SwtichButtonAnimation;
