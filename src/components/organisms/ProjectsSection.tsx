import { projects } from "@/constants/data/projects";
import Link from "next/link";
import ProblemsList from "../molecules/ProblemsList";
import SectionWrapper from "./SectionWrapper";

function ProjectsSection() {
  const { title, duration, desc, gitHub, skills, problems } =
    projects["travelStory"];

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
          <p className="mt-4">
            {desc.map((line, index) => (
              <span key={index}>
                {line}
                {index + 1 !== desc.length ? <br /> : null}
              </span>
            ))}
          </p>
          <dt className="mt-4 font-semibold text-[#5c4033]">사용 기술</dt>
          <dd>{skills.join(", ")}</dd>
          <ProblemsList problems={problems} />
        </dd>
      </dl>
    </SectionWrapper>
  );
}

export default ProjectsSection;
