interface SkillsListProps {
  skills: string[];
  horizontal?: boolean;
}

function SkillsList({ skills, horizontal = false }: SkillsListProps) {
  if (horizontal) {
    return <p className="text-[#7c584a] ">{skills.join(", ")}</p>;
  }

  return (
    <ul className="list-disc pl-5 space-y-1 text-[#7c584a]">
      {skills.map((skill, index) => (
        <li key={index} className="font-semibold text-[#5c4033]">
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default SkillsList;
