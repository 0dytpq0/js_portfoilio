interface SkillsListProps {
  skills: string[];
}

function SkillsList({ skills }: SkillsListProps) {
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
