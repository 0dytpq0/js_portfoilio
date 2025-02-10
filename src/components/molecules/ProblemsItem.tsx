import { IProblem } from "@/types/dataTypes";

function ProblemsItem({ title, problem, challenge, solution }: IProblem) {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg text-[#5c4033] mb-4">{title}</h3>
      <dl className="space-y-4">
        <dt className="font-semibold text-md text-[#5c4033]">문제점</dt>
        <dd className="text-[#7c584a]">{problem}</dd>

        <dt className="font-semibold text-md text-[#5c4033]">도전</dt>
        <dd className="text-[#7c584a]">
          <ul className="list-disc pl-5">
            {challenge.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </dd>

        <dt className="font-semibold text-md text-[#5c4033]">해결</dt>
        <dd className="text-[#7c584a]">
          <ul className="list-disc pl-5">
            {solution.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </dd>
      </dl>
    </div>
  );
}

export default ProblemsItem;
