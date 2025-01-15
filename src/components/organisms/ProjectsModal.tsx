import { projects } from "@/constants/data/projects";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import Modal from "../molecules/Modal";
import ProblemsList from "../molecules/ProblemsList";
import ServiceList from "../molecules/ServiceList";
import TaskList from "../molecules/TaskList";

interface IProjectsModal {
  name: string;
}

function ProjectsModal({ name }: IProjectsModal) {
  const { title, duration, desc, gitHub, skills, problems, services, tasks } =
    projects[name];
  const { openModal } = useModal();

  return (
    <>
      <Modal>
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
            <dd>{skills.join(", ")}</dd>
          </dl>
        </dl>
        <ServiceList services={services!} />
        <TaskList tasks={tasks!} />
        <ProblemsList problems={problems} />
      </Modal>
    </>
  );
}

export default ProjectsModal;
