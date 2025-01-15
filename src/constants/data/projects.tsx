interface IProjectItem {
  title: string;
  duration: string;
  gitHub: string;
  address: string;
  desc: JSX.Element;
  skills: string[];
}

export const projects: { [key: string]: IProjectItem } = {
  travelStory: {
    title: "Travel Story",
    duration: "2024.07 ~ 2024.08",
    gitHub: "https://github.com/0dytpq0/final-project-b1",
    address: "https://final-project-b1.vercel.app",
    desc: (
      <>
        'Travel Story'는 유저들에게 여행에 대한 편의성을 제공하기 위해 개발한
        플랫폼입니다. <br />
        유저가 관심있는 여행지의 정보를 쉽게 얻고, 일정과 관광지를 공유 및
        계획할 수 있도록 돕습니다.
      </>
    ),
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
  },
};
