import { experiences } from "@/constants/data/experiences";
import { ExperienceItem } from "../molecules/ExperienceItem";
import SectionWrapper from "./SectionWrapper";

export function ExperienceSection() {
  return (
    <SectionWrapper title="Experience">
      <section className="flex-grow text-[#7c584a]">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              tasks={exp.tasks}
            />
          ))}
        </dl>
      </section>
    </SectionWrapper>
  );
}
