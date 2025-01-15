import { IExperience } from "@/types/dataTypes";

export function ExperienceItem({
  company,
  role,
  duration,
  tasks,
}: IExperience) {
  return (
    <div>
      <dt className="font-semibold text-[#5c4033]">
        {company} - {role}
      </dt>
      <dd>
        <span>{duration}</span>
        <ul className="list-disc pl-5 mt-2">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}
