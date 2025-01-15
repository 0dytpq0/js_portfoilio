import EducationItem from "../molecules/EducationItem";
import SectionWrapper from "./SectionWrapper";

function EducationSection() {
  const educationItems = [
    {
      duration: "2016.03 ~ 2024.03(졸업)",
      description: "호남 대학교 (영문학과)",
    },
    {
      duration: "2024.04 ~ 2024.09(수료)",
      description: "내일배움캠프 React 5기 부트캠프",
    },
  ];

  return (
    <SectionWrapper title="Education">
      <div className="grid grid-cols-2 text-[#7c584a]">
        {educationItems.map((item, index) => (
          <EducationItem
            key={index}
            duration={item.duration}
            description={item.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default EducationSection;
