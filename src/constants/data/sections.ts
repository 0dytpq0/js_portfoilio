// data/sections.ts
import { Experience } from "@/types/experience";
import { Section } from "@/types/section";

export const sections: Section[] = [
  {
    heading: "Personal",
    text: `반갑습니다, 사용자 중심의 경험을 설계하는 이타적인 프론트엔드 개발자 박요셉입니다. 저의 강점은 타인의 입장에서 생각하며 문제를 해결하려는 태도입니다. 사용자 관점에서 UX를 고민하고, 팀의 성과를 극대화하기 위해 협업과 소통에 최선을 다합니다. 문제 해결과 성능 최적화에 깊은 관심을 가지고 있으며, 효율적인 코드 작성과 최적의 솔루션 도출을 위해 끊임없이 질문하고 탐구합니다. 감사합니다.`,
  },
  {
    heading: "Experience",
    items: [
      {
        title: "(주) 다운 - 프론트엔드 개발자",
        description: [
          "사내 윈도우 기반 프로그램을 웹 애플리케이션으로 전환 및 유지보수",
          "자동 착유 및 방역 기계 조작 기능 클라이언트 구현 및 서버 작업 수행",
        ],
      },
      {
        title: "메멘토 AI - 프론트엔드 개발자",
        description: [
          "병원 CRM 시스템의 사용자 인터페이스(UI) 설계 및 개발",
          "클라이언트와 서버 간 데이터 페칭 및 성능 최적화",
        ],
      },
    ],
  },
  {
    heading: "Projects",
    text: "프로젝트 목록.",
  },
  {
    heading: "Education",
    text: "교육기관.",
  },
  {
    heading: "Skills",
    text: "(tech - soft)",
  },
];

const experiences: Experience[] = [
  {
    company: "(주) 다운",
    role: "프론트엔드 개발자",
    period: "2022.11 ~ 2023.05",
    tasks: [
      "사내 윈도우 기반 프로그램을 웹 애플리케이션으로 전환 및 유지보수",
      "자동 착유 및 방역 기계 조작 기능 클라이언트 구현 및 서버 작업 수행",
    ],
    responsibilities: [
      "비대면 차량 소독 시스템 웹 애플리케이션 풀스텍 개발",
      "실시간 목장 관리 어플리케이션 실시간 데이터 처리 및 사용자 인터페이스 구현",
      "농장 데이터베이스 백업 및 동기화 프로그램 구현",
    ],
    technologies: ["React", "Node.js", "MQTT", "MySQL", "TCP"],
  },
  {
    company: "메멘토 AI",
    role: "프론트엔드 개발자",
    period: "2024.10.21 ~ 2024.11.21",
    tasks: [
      "병원 CRM 시스템의 사용자 인터페이스(UI) 설계 및 개발",
      "클라이언트와 서버 간 데이터 페칭 및 성능 최적화",
    ],
    responsibilities: [
      "병원 CRM UI 구현 (Tailwind CSS 및 Radix UI 활용)",
      "React Query를 활용한 데이터 상태 관리 및 최적화",
    ],
    technologies: ["React", "React Query", "Tailwind CSS", "Radix UI", "Git"],
  },
];
