import { ExperienceItem } from "../molecules/ExperienceItem";
import SectionWrapper from "./SectionWrapper";

export function ExperienceSection() {
  const experiences = [
    {
      company: "(주) 다운",
      role: "프론트엔드 개발자",
      duration: "2022.11 ~ 2023.05",
      tasks: [
        "사내 윈도우 기반 프로그램을 웹 애플리케이션으로 전환 및 유지보수",
        "자동 착유 및 방역 기계 조작 기능 클라이언트 구현 및 서버 작업 수행",
      ],
    },
    {
      company: "메멘토 AI",
      role: "프론트엔드 개발자",
      duration: "2024.10.21 ~ 2024.11.21",
      tasks: [
        "병원 CRM 시스템의 사용자 인터페이스(UI) 설계 및 개발",
        "클라이언트와 서버 간 데이터 페칭 및 성능 최적화",
      ],
    },
  ];

  return (
    <SectionWrapper title="Experience">
      <section className="flex-grow text-[#7c584a]">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              tasks={exp.tasks}
            />
          ))}
        </dl>
      </section>
    </SectionWrapper>
  );
}
