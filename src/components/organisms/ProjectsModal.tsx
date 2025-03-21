import { projects } from "@/constants/data/projects";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import Modal from "../molecules/Modal";
import ProblemsSection from "./ProblemsSection";
import ServiceSection from "./ServiceSection";
import TaskSection from "./TaskSection";
import TechDecisionSection from "./TechDecisionSection";
import Divider from "../atoms/Divider";

interface IProjectsModalProps {
  name: string;
}

function ProjectsModal({ name }: IProjectsModalProps) {
  const { techDecision, problems, services, tasks, title } = projects[name];
  return (
    <>
      <Modal>
        <div className="w-full flex">
          <div className="w-full">
            <h1 className="font-bold text-[#5c4033] text-5xl">{title}</h1>
            <Divider thickness="md" />
            <div className="grid grid-cols-2">
              <ServiceSection services={services!} />
              <TaskSection tasks={tasks!} />
            </div>
          </div>
        </div>
        <TechDecisionSection techDecision={techDecision!} />
        <ProblemsSection problems={problems} />
      </Modal>
    </>
  );
}

export default ProjectsModal;
