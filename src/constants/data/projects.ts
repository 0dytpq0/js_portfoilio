import { IProject } from "@/types/dataTypes";

export const projects: { [key: string]: IProject } = {
  travelStory: {
    title: "Travel Story",
    duration: "2024.07 ~ 2024.08",
    gitHub: "https://github.com/0dytpq0/final-project-b1",
    address: "https://final-project-b1.vercel.app",
    desc: [
      "'Travel Story'는 유저들에게 여행에 대한 편의성을 제공하기 위해 개발한 플랫폼입니다.",
      "유저가 관심있는 여행지의 정보를 쉽게 얻고, 일정과 관광지를 공유 및 계획할 수 있도록 돕습니다.",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tanstack-Query",
      "Zustand",
      "TailwindCss",
      "Git",
      "StoryBook",
      "Vercel",
    ],
    services: ["여행 정보 제공", "계획 기반 경로 표시", "일정 공유"],
    tasks: [
      "정보 제공 페이지 구현",
      "여행 일정 추가 및 생성 기능 구현",
      "북마크 기능 구현",
    ],
    techDecision: {
      tanstackQuery: {
        title: "Tanstack Query",
        reason: [
          " 데이터에 대한 자동 캐싱 및 리페칭 기능 및 비동기 작업의 효율적 관리",
          "제공하는 훅들의 강력한 성능으로 인한 SSR, 낙관적 업데이트 등에 대한 간편한 구현",
        ],
      },
      supabase: {
        title: "Supabase",
        reason: [
          "백엔드 없이도 강력한 데이터 관리 기능 제공",
          "오픈소스이기에 데이터 소유권 유지 가능",
        ],
      },
      zustand: {
        title: "Zustand",
        reason: [
          "직관적인 API로 인해 간편하게 상태 관리 가능",
          "보일러 플레이트 코드 최소화",
        ],
      },
    },
    problems: {
      bookmarkFeature: {
        title: "북마크 기능",
        problem:
          "Hook에서 API 호출 로직을 관리했지만, 다수의 컴포넌트가 생성될 때 동일한 네트워크 요청이 중복 발생.",
        challenge: [
          "API 호출 로직을 중앙화하여 중복 요청 방지.",
          "lazy 로딩 적용으로 불필요한 네트워크 요청 감소.",
        ],
        solution: [
          "React Query를 활용해 상태 관리와 네트워크 요청 최적화.",
          "낙관적 업데이트를 적용하여 사용자 경험 개선.",
        ],
      },
      reviewFeature: {
        title: "관광지별 리뷰 작성 기능",
        problem:
          "리뷰 작성 시 이미지 첨부 기능에서 서버로 빈 파일 데이터가 전달되는 문제 발생.",
        challenge: [
          "이미지 데이터를 서버로 올바르게 전송하기 위해 파일 데이터 처리와 전송 방식 최적화.",
        ],
        solution: [
          "<code>FormData</code> 객체를 사용해 이미지 데이터를 서버로 전송.",
          "파일 크기 및 형식 제한 검증을 통해 업로드 안정성 확보.",
        ],
      },
      performanceOptimization: {
        title: "페이지 성능 최적화",
        problem: "페이지 로딩 속도가 느려 사용자 경험에 부정적인 영향을 미침.",
        challenge: [
          "이미지 최적화를 통해 로딩 속도 개선.",
          "캐싱 및 lazy 로딩을 적용하여 초기 로딩 시간 단축.",
        ],
        solution: [
          "LightHouse 성능 점수를 50% 이상 향상.",
          "사용자 피드백을 통해 긍정적인 반응 확인.",
        ],
      },
    },
  },
  cloneMarket: {
    title: "Clone Market",
    duration: "2025-09 ~ ",
    gitHub: "https://github.com/0dytpq0/Clone-Market",
    address: "none",
    desc: [
      "‘Clone Market’은 마켓 컬리와 애플의 UI를 모방한 소규모 이커머스 서비스 프로젝트입니다.",
      "유저의 가입부터 결제까지의 플로우를 경험해보고자 진행중인 개인 프로젝트입니다.",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "Tanstack-Query",
      "Zustand",
      "TailwindCss",
      "Git",
      "Vercel",
    ],
    services: ["여행 정보 제공", "계획 기반 경로 표시", "일정 공유"],
    tasks: [
      "정보 제공 페이지 구현",
      "여행 일정 추가 및 생성 기능 구현",
      "북마크 기능 구현",
    ],
    techDecision: {
      tanstackQuery: {
        title: "Tanstack Query",
        reason: [
          " 데이터에 대한 자동 캐싱 및 리페칭 기능 및 비동기 작업의 효율적 관리",
          "제공하는 훅들의 강력한 성능으로 인한 SSR, 낙관적 업데이트 등에 대한 간편한 구현",
        ],
      },
      supabase: {
        title: "Supabase",
        reason: [
          "백엔드 없이도 강력한 데이터 관리 기능 제공",
          "오픈소스이기에 데이터 소유권 유지 가능",
        ],
      },
      zustand: {
        title: "Zustand",
        reason: [
          "직관적인 API로 인해 간편하게 상태 관리 가능",
          "보일러 플레이트 코드 최소화",
        ],
      },
    },
    problems: {
      bookmarkFeature: {
        title: "북마크 기능",
        problem:
          "Hook에서 API 호출 로직을 관리했지만, 다수의 컴포넌트가 생성될 때 동일한 네트워크 요청이 중복 발생.",
        challenge: [
          "API 호출 로직을 중앙화하여 중복 요청 방지.",
          "lazy 로딩 적용으로 불필요한 네트워크 요청 감소.",
        ],
        solution: [
          "React Query를 활용해 상태 관리와 네트워크 요청 최적화.",
          "낙관적 업데이트를 적용하여 사용자 경험 개선.",
        ],
      },
      reviewFeature: {
        title: "관광지별 리뷰 작성 기능",
        problem:
          "리뷰 작성 시 이미지 첨부 기능에서 서버로 빈 파일 데이터가 전달되는 문제 발생.",
        challenge: [
          "이미지 데이터를 서버로 올바르게 전송하기 위해 파일 데이터 처리와 전송 방식 최적화.",
        ],
        solution: [
          "<code>FormData</code> 객체를 사용해 이미지 데이터를 서버로 전송.",
          "파일 크기 및 형식 제한 검증을 통해 업로드 안정성 확보.",
        ],
      },
      performanceOptimization: {
        title: "페이지 성능 최적화",
        problem: "페이지 로딩 속도가 느려 사용자 경험에 부정적인 영향을 미침.",
        challenge: [
          "이미지 최적화를 통해 로딩 속도 개선.",
          "캐싱 및 lazy 로딩을 적용하여 초기 로딩 시간 단축.",
        ],
        solution: [
          "LightHouse 성능 점수를 50% 이상 향상.",
          "사용자 피드백을 통해 긍정적인 반응 확인.",
        ],
      },
    },
  },
};
