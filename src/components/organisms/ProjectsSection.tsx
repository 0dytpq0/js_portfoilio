"use client";

import { useRef } from "react";
import { projects } from "@/constants/data/projects";
import ProjectItem from "../molecules/ProjectItem";
import SectionWrapper from "./SectionWrapper";
import { useSlider } from "@/hooks/useSlider";
import ArrowButton from "../atoms/ArrowButton";
import { cn } from "@/utils/cn";

function ProjectsSection() {
  const projectKeys = Object.keys(projects);
  const { currentIndex, animation, prevProject, nextProject, isAnimating } =
    useSlider(projectKeys);

  const projectRef = useRef<{ openModal: () => void } | null>(null);

  return (
    <SectionWrapper title="Projects">
      <div className="w-full relative flex flex-grow items-center">
        <ArrowButton direction="left" onClick={prevProject} />
        <ArrowButton direction="right" onClick={nextProject} />
        <div className="w-full relative overflow-hidden">
          <button
            onClick={() => projectRef.current?.openModal()}
            className={cn(
              `details-button`,
              isAnimating
                ? "pointer-events-none opacity-50"
                : "pointer-events-auto opacity-100"
            )}
          >
            자세히 보기
          </button>
          <div className={`w-full flex items-center ${animation}`}>
            <ProjectItem
              key={currentIndex}
              name={projectKeys[currentIndex]}
              ref={projectRef}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
