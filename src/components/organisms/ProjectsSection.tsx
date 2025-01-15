"use client";

import ProjectItem from "../molecules/ProjectItem";
import ProjectsModal from "./ProjectsModal";
import SectionWrapper from "./SectionWrapper";

function ProjectsSection() {
  return (
    <>
      <SectionWrapper title="Projects">
        <ProjectItem name="travelStory" />
      </SectionWrapper>
      <ProjectsModal name="travelStory" />
    </>
  );
}

export default ProjectsSection;
