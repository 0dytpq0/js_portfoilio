interface EducationItemProps {
  duration: string;
  description: string;
}

function EducationItem({ duration, description }: EducationItemProps) {
  return (
    <div className="flex-grow">
      <span className="block font-semibold text-[#5c4033]">{duration}</span>
      <span>{description}</span>
    </div>
  );
}

export default EducationItem;
