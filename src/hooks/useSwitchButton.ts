import { useCallback, useRef, useState } from "react";
import { AnimationItem } from "lottie-web";

const useSwitchButton = () => {
  const lottieRef = useRef<AnimationItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSwitch = useCallback(() => {
    const player = lottieRef.current;

    if (player) {
      if (isPlaying) {
        player.playSegments([player.totalFrames, 0], true);
        setIsPlaying(false);
      } else {
        player.playSegments([0, player.totalFrames], true);
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  return { lottieRef, isPlaying, handleSwitch };
};

export default useSwitchButton;
