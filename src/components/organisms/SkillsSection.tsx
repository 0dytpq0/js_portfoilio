import { skills } from "@/constants/data/skills";
import SkillsList from "../molecules/SkillsList";
import SectionWrapper from "./SectionWrapper";

function SkillsSection() {
  const { hard: hardSkills, soft: softSkills } = skills;

  return (
    <SectionWrapper title={`Skills`}>
      <div className="flex flex-grow">
        <div className="flex-grow flex flex-col">
          <SkillsList skills={hardSkills} />
        </div>
        <div className="flex-grow flex flex-col">
          <SkillsList skills={softSkills} />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default SkillsSection;
