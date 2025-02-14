interface TaskSectionProps {
  tasks: string[];
}

function TaskSection({ tasks }: TaskSectionProps) {
  return (
    <div>
      <dt className="mt-4 font-semibold text-lg text-[#5c4033]">담당 역할</dt>
      <dd>
        <ul className="list-disc pl-5 text-[#7c584a]">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export default TaskSection;
