import { skills } from "@/constants/data/skills";
import SectionWrapper from "./SectionWrapper";

function SkillsSection() {
  const { hard: hardSkills, soft: softSkills } = skills;

  return (
    <SectionWrapper title="Skills">
      <div className="flex flex-grow">
        <div className="flex-grow flex flex-col">
          {hardSkills.map((skill, index) => (
            <span key={index} className="font-semibold text-[#5c4033]">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex-grow flex flex-col">
          {softSkills.map((skill, index) => (
            <span key={index} className="font-semibold text-[#5c4033]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default SkillsSection;
