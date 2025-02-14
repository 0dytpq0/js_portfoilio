import { useState, useEffect } from "react";

export function useSlider(projectKeys: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? projectKeys.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);

    // 정적으로 작동하는 tailwindcss를 동적으로 제어하려니 react의 진행 속도와 다른 부분이 생겨 작동이 잘 안됨
    // setAnimation("animate-slide-out-right");

    // setTimeout(() => {

    //   setAnimation("animate-slide-in-left");
    //   setTimeout(() => setIsAnimating(false), 300);
    // }, 300);
  };

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === projectKeys.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);

    // setAnimation("animate-slide-out-left");

    // setTimeout(() => {

    //   setAnimation("animate-slide-in-right");
    //   setTimeout(() => setIsAnimating(false), 300);
    // }, 300);
  };

  return { currentIndex, animation, prevProject, nextProject, isAnimating };
}
