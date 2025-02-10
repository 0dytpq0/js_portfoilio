"use client";

import { useState } from "react";
import { projects } from "@/constants/data/projects";
import ProjectItem from "../molecules/ProjectItem";
import SectionWrapper from "./SectionWrapper";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import ProjectsModal from "./ProjectsModal";

function ProjectsSection() {
  const projectKeys = Object.keys(projects);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectKeys.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectKeys.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionWrapper title="Projects">
      <div className="w-full relative flex flex-grow items-center">
        {/* 왼쪽 화살표 */}
        <TiChevronLeft
          onClick={prevProject}
          className="
            absolute left-[-50px] top-1/2 -translate-y-1/2 text-[#a16848] 
            hover:text-[#7c584a] hover:scale-125 transition-transform
            bg-white/30 backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer"
          size={40}
        />

        {/* 현재 프로젝트 표시 */}
        <div className={`w-full flex items-center`}>
          <ProjectItem
            key={projectKeys[currentIndex]}
            name={projectKeys[currentIndex]}
          />
        </div>

        {/* 오른쪽 화살표 */}
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
