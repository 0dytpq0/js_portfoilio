"use client";

import { useRef, useState } from "react";
import { projects } from "@/constants/data/projects";
import ProjectItem from "../molecules/ProjectItem";
import SectionWrapper from "./SectionWrapper";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";

function ProjectsSection() {
  const projectKeys = Object.keys(projects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectRef = useRef<{ openModal: () => void } | null>(null);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectKeys.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectKeys.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionWrapper title="Projects">
      <div className="w-full relative flex flex-grow items-center">
        <button
          onClick={() => projectRef.current?.openModal()}
          className="absolute top-0 right-10 bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg cursor-pointer text-[#a16848] 
            hover:text-[#7c584a] hover:scale-110 transition-transform"
        >
          자세히 보기
        </button>
        <TiChevronLeft
          onClick={prevProject}
          className="
            absolute left-[-50px] top-1/2 -translate-y-1/2 text-[#a16848] 
            hover:text-[#7c584a] hover:scale-125 transition-transform
            bg-white/30 backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer"
          size={40}
        />

        <div className={`w-full flex items-center`}>
          <ProjectItem
            key={projectKeys[currentIndex]}
            name={projectKeys[currentIndex]}
            ref={projectRef}
          />
        </div>

        <TiChevronRight
          onClick={nextProject}
          className="
            absolute right-4 top-1/2 -translate-y-1/2 text-[#a16848] 
            hover:text-[#7c584a] hover:scale-125 transition-transform
            bg-white/30 backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer"
          size={40}
        />
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
