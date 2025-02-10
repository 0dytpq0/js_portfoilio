import { ITechDecision } from "@/types/dataTypes";
import React from "react";

interface ITechDecisionSectionProps {
  techDecision: { [key: string]: ITechDecision };
}

function TechDecisionSection({ techDecision }: ITechDecisionSectionProps) {
  return (
    <div>
      <h1 className="font-bold text-3xl text-[#5c4033] my-4">
        기술적 의사 결정
      </h1>
      <dl>
        {Object.entries(techDecision!).map(([key, { title, reason }]) => (
          <div key={key}>
            <dt className="font-bold text-xl text-[#5c4033] my-2">{title}</dt>
            <dd>
              <ul className="list-disc pl-5">
                {reason.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default TechDecisionSection;
