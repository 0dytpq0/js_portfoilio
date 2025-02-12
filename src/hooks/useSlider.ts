import { useState } from "react";

export function useSlider(projectKeys: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  console.log("animatino", animation);
  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setAnimation("animate-slideOutRight");
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? projectKeys.length - 1 : prev - 1
      );
      setAnimation("animate-slideInLeft");
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setAnimation("animate-slideOutLeft");
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === projectKeys.length - 1 ? 0 : prev + 1
      );
      setAnimation("animate-slideInRight");
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  return { currentIndex, animation, prevProject, nextProject };
}
