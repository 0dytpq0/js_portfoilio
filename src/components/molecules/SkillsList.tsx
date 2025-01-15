interface SkillsListProps {
  skills: string[];
  horizontal?: boolean; // 수평 출력 여부
}

function SkillsList({ skills, horizontal = false }: SkillsListProps) {
  if (horizontal) {
    // 수평 출력 (문자열로 join)
    return <p className="text-[#7c584a] ">{skills.join(", ")}</p>;
  }

  // 수직 출력 (리스트 형태)
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
