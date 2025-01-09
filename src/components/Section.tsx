// components/Section.tsx
import { Section } from "@/types/section";
import React from "react";

interface SectionProps {
  section: Section;
}

const SectionComponent: React.FC<SectionProps> = ({ section }) => {
  return (
    <div className="flex gap-x-8">
      <h2 className="font-bold text-3xl min-w-52">{section.heading}</h2>
      <div className="flex-grow">
        {section.items ? (
          <dl className="grid grid-cols-2 gap-x-4">
            {section.items.map((item, index) => (
              <div key={index}>
                <dt className="font-bold text-lg">{item.title}</dt>
                <dd className="mt-2">
                  <ul className="list-disc pl-5">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="flex-grow">{section.text}</p>
        )}
      </div>
    </div>
  );
};

export default SectionComponent;
