import { IProject } from "@/types/dataTypes";
import ProblemsItem from "../molecules/ProblemsItem";

function ProblemsSection({ problems }: { problems: IProject["problems"] }) {
  if (!problems) return null;

  return (
    <>
      <h1 className="font-bold text-3xl text-[#5c4033] my-4">문제 해결 목록</h1>
      <div className="grid grid-cols-1 gap-4">
        {Object.values(problems).map((problem, index) => (
          <ProblemsItem
            key={index}
            title={problem.title}
            problem={problem.problem}
            challenge={problem.challenge}
            solution={problem.solution}
          />
        ))}
      </div>
    </>
  );
}

export default ProblemsSection;
