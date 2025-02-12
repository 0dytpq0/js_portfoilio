import { useState, useEffect } from "react";

export function useSlider(projectKeys: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (animation) {
      const timeout = setTimeout(() => {
        setAnimation("");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [animation]);

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimation("animate-slide-out-right");

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? projectKeys.length - 1 : prev - 1
      );
      setAnimation("animate-slide-in-left");
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimation("animate-slide-out-left");

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === projectKeys.length - 1 ? 0 : prev + 1
      );
      setAnimation("animate-slide-in-right");
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  return { currentIndex, animation, prevProject, nextProject, isAnimating };
}
