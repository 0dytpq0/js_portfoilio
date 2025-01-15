import SectionWrapper from "./SectionWrapper";

function SkillsSection() {
  const technicalSkills = [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Git",
    "TypeScript",
    "JavaScript",
    "Tanstack Query",
    "Node.js",
  ];

  const softSkills = [
    "책임 의식",
    "적응력",
    "협업 능력",
    "비판적 사고",
    "시간 관리",
    "끈기",
    "유연성",
    "팀워크",
  ];

  return (
    <SectionWrapper title="Skills">
      <div className="flex flex-grow">
        <div className="flex-grow flex flex-col">
          {technicalSkills.map((skill, index) => (
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
