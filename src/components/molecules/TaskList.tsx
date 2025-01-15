interface TaskListProps {
  tasks: string[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      <dt className="mt-4 font-semibold text-[#5c4033]">담당 역할</dt>
      <dd>
        <ul className="list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export default TaskList;
