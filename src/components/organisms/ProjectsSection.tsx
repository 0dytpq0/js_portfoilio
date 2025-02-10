"use client";

import { projects } from "@/constants/data/projects";
import ProjectItem from "../molecules/ProjectItem";
import ProjectsModal from "./ProjectsModal";
import SectionWrapper from "./SectionWrapper";

function ProjectsSection() {
  return (
    <>
      <SectionWrapper title="Projects">
        {Object.keys(projects).map((key) => (
          <ProjectItem key={key} name={key} />
        ))}
      </SectionWrapper>
    </>
  );
}

export default ProjectsSection;
