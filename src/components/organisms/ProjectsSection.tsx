"use client";

import { useRef, useState } from "react";
import { projects } from "@/constants/data/projects";
import ProjectItem from "../molecules/ProjectItem";
import SectionWrapper from "./SectionWrapper";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import { useSlider } from "@/hooks/useSlider";

function ProjectsSection() {
  const projectKeys = Object.keys(projects);
  const { currentIndex, animation, prevProject, nextProject } =
    useSlider(projectKeys);

  const projectRef = useRef<{ openModal: () => void } | null>(null);

  return (
    <SectionWrapper title="Projects">
      <div className="w-full relative flex flex-grow items-center">
        <TiChevronLeft
          onClick={prevProject}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-[#a16848] 
            hover:text-[#7c584a] hover:scale-125 transition-transform
            bg-white/30 backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer"
          size={40}
        />
        <div className="w-full relative overflow-hidden">
          <button
            onClick={() => projectRef.current?.openModal()}
            className="details-button"
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

        <TiChevronRight
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a16848] 
            hover:text-[#7c584a] hover:scale-125 transition-transform
            bg-white/30 backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer"
          size={40}
        />
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
