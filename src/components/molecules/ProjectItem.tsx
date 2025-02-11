import { forwardRef, useImperativeHandle } from "react";
import { projects } from "@/constants/data/projects";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import SkillsList from "./SkillsList";
import ProjectsModal from "../organisms/ProjectsModal";

interface IProjectItem {
  name: string;
}

const ProjectItem = forwardRef(({ name }: IProjectItem, ref) => {
  const { title, duration, desc, gitHub, skills } = projects[name];
  const { openModal } = useModal();

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <>
      <dl className="text-[#7c584a]">
        <dt className="font-semibold text-[#5c4033]">{title}</dt>
        <dl>
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
          <SkillsList skills={skills} horizontal={true} />
        </dl>
      </dl>
      <ProjectsModal name={name} />
    </>
  );
});

export default ProjectItem;
