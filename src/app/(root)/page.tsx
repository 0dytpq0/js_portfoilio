import UserInfo from "@/components/molecules/UserInfo";
import EducationSection from "@/components/organisms/EducationSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import PersonalSection from "@/components/organisms/PersonalSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import UserSection from "@/components/organisms/UserSection";

export default function Home() {
  return (
    <div className="m-auto rounded-lg bg-[#f4f1ec] w-[1400px] min-w-[1200px]  container">
      <main className="flex p-8 h-full w-full">
        <section className="flex flex-col min-w-[375px] gap-y-10 bg-[#e8ded2] p-6 rounded-lg shadow-lg">
          <UserSection />
        </section>
        <section className="flex-grow px-6">
          <PersonalSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <SkillsSection />
        </section>
      </main>
    </div>
  );
}
