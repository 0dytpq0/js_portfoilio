import { projects } from "@/constants/data/projects";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import Modal from "../molecules/Modal";
import ProblemsList from "../molecules/ProblemsList";
import ServiceList from "../molecules/ServiceList";
import TaskList from "../molecules/TaskList";

interface IProjectsModal {
  name: string;
}

function ProjectsModal({ name }: IProjectsModal) {
  const { problems, services, tasks } = projects[name];
  const { openModal } = useModal();

  return (
    <>
      <Modal>
        <div className="w-full flex">
          <div className="w-1/5">
            <h1 className="font-bold text-[#5c4033] text-5xl">Travel Story</h1>
            <ServiceList services={services!} />
            <TaskList tasks={tasks!} />
          </div>
          <div className="flex-grow flex overflow-hidden">
            <div className="w-full relative aspect-video max-h-72">
              <Image
                src={"/main.PNG"}
                alt="travelStoryMain"
                fill
                priority={true}
                className="object-fill"
              />
            </div>
            <div className="w-full relative aspect-video max-h-72">
              <Image
                src={"/travelStoryMain.PNG"}
                alt="travelStoryMain"
                fill
                priority={true}
                className="object-fill"
              />
            </div>
            <div className="w-full relative aspect-video max-h-72">
              <Image
                src={"/main.PNG"}
                alt="travelStoryMain"
                fill
                priority={true}
                className="object-fill"
              />
            </div>
          </div>
        </div>
        <ProblemsList problems={problems} />
      </Modal>
    </>
  );
}

export default ProjectsModal;
