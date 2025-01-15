import { projects } from "@/constants/data/projects";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

function ProjectsSection() {
  const { title, duration, desc, gitHub, skills } = projects["travelStory"];

  return (
    <SectionWrapper title="Projects">
      <dl className="text-[#7c584a]">
        <dt className="font-semibold text-[#5c4033]">{title}</dt>
        <dd>
          <span>{duration}</span> <br />
          <span>
            GitHub:
            <Link
              href={gitHub}
              className="text-[#a16848] underline hover:text-[#7c584a]"
            >
              {gitHub}
            </Link>
          </span>
          <p className="mt-4">{desc}</p>
          <dt className="mt-4 font-semibold text-[#5c4033]">사용 기술</dt>
          <dd>{skills.join(", ")}</dd>
        </dd>
      </dl>
    </SectionWrapper>
  );
}

export default ProjectsSection;
