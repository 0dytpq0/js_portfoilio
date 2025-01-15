import EducationSection from "@/components/organisms/EducationSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import PersonalSection from "@/components/organisms/PersonalSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import { IProject } from "@/types/dataTypes";
import Link from "next/link";
// personal = title, ReactNode
// experience = title, ReactNode
// Projects = title, ReactNode
// Education = title, ReactNode
// Skills = title, ReactNode

// ReactNode 를 만들어주는 컴포넌트가 필요함
// {
// title : string
// desc : string
// duration : string
// github : string
// skills : string[]
// }

export default function Home() {
  function ProblemsList({ problems }: { problems: IProject["problems"] }) {
    return (
      <div>
        {Object.values(problems!).map((problem, index) => (
          <div key={index} className="mb-8">
            <h3 className="font-semibold text-lg text-[#5c4033]">
              {problem.title}
            </h3>
            <dl className="space-y-4">
              <dt className="font-semibold text-md text-[#5c4033]">문제점</dt>
              <dd className="text-[#7c584a]">{problem.problem}</dd>
              <dt className="font-semibold text-md text-[#5c4033]">도전</dt>
              <dd className="text-[#7c584a]">
                <ul className="list-disc pl-5">
                  {problem.challenge.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </dd>
              <dt className="font-semibold text-md text-[#5c4033]">해결</dt>
              <dd className="text-[#7c584a]">
                <ul className="list-disc pl-5">
                  {problem.solution.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="m-auto rounded-lg h-screen bg-[#f4f1ec] container">
      <main className="flex p-8 h-full w-full">
        <section className="flex flex-col w-1/3 gap-y-10 bg-[#e8ded2] p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-7xl text-[#5c4033]">
            Joseph <br />
            Park
          </h1>
          <p className="font-bold text-lg text-[#7c584a]">
            Phone : 010-3146-0962 <br />
            Email : rkfnahs12e@gmail.com <br />
            GitHub :
            <Link
              href={"https://github.com/0dytpq0"}
              className="text-[#a16848] underline hover:text-[#7c584a]"
            >
              https://github.com/0dytpq0
            </Link>
            <br />
            Blog :
            <Link
              href={"https://velog.io/@0dytpq0/posts"}
              className="text-[#a16848] underline hover:text-[#7c584a]"
            >
              https://velog.io/@0dytpq0/posts
            </Link>
            <br />
          </p>
          <span className="font-bold text-6xl mt-40 text-[#5c4033]">
            Frontend <br /> Developer
          </span>
          <div className="bg-[#a16848] w-full flex-grow rounded-lg shadow-md text-white flex items-center justify-center">
            image
          </div>
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

// travle story 추가설명
{
  /* <dt className="mt-4 font-semibold text-[#5c4033]">
                    제공 서비스
                  </dt>
                  <dd>
                    <ul className="list-disc pl-5">
                      <li>여행 정보 제공</li>
                      <li>계획 기반 여행 경로 표시 (Google Map API)</li>
                      <li>일정 공유 (Kakao API)</li>
                    </ul>
                  </dd>
                  <dt className="mt-4 font-semibold text-[#5c4033]">
                    담당 역할
                  </dt>
                  <dd>
                    <ul className="list-disc pl-5">
                      <li>정보 제공 페이지 구현</li>
                      <li>여행 일정 추가 및 생성 기능 구현</li>
                      <li>북마크 기능 구현</li>
                      <li>성능 및 SEO 최적화</li>
                    </ul>
                  </dd>
                  <dt className="mt-4 font-semibold text-[#5c4033]">
                    문제 해결 목록
                  </dt>
                  <dd className="mt-4">
                    <h3 className="font-semibold text-lg text-[#5c4033]">
                      북마크 기능
                    </h3>
                    <dl className="space-y-4">
                      <dt className="font-semibold text-md text-[#5c4033]">
                        문제점
                      </dt>
                      <dd className="text-[#7c584a]">
                        Hook에서 API 호출 로직을 관리하고 있었으나, 다수의
                        컴포넌트가 생성될 때마다 동일한 네트워크 요청이 중복
                        발생하는 문제.
                      </dd>
                      <dt className="font-semibold text-md text-[#5c4033]">
                        도전
                      </dt>
                      <dd className="text-[#7c584a]">
                        <ul className="list-disc pl-5">
                          <li>API 호출 로직을 중앙화하여 중복 요청을 방지.</li>
                          <li>
                            lazy 로딩 적용으로 불필요한 네트워크 요청 감소.
                          </li>
                        </ul>
                      </dd>
                      <dt className="font-semibold text-md text-[#5c4033]">
                        해결
                      </dt>
                      <dd className="text-[#7c584a]">
                        <ul className="list-disc pl-5">
                          <li>
                            React Query를 활용하여 상태 관리와 네트워크 요청
                            최적화.
                          </li>
                          <li>낙관적 업데이트를 적용하여 사용자 경험 개선.</li>
                        </ul>
                      </dd>
                    </dl>
                    <h3 className="font-semibold text-lg text-[#5c4033]">
                      관광지별 리뷰 작성 기능
                    </h3>
                    <dl className="space-y-4">
                      <dt className="font-semibold text-md text-[#5c4033]">
                        문제점
                      </dt>
                      <dd className="text-[#7c584a]">
                        리뷰 작성 시 이미지 첨부 기능에서, 서버로 빈 파일
                        데이터가 전달되는 문제 발생.
                      </dd>
                      <dt className="font-semibold text-md text-[#5c4033]">
                        도전
                      </dt>
                      <dd className="text-[#7c584a]">
                        <ul className="list-disc pl-5">
                          <li>
                            이미지 데이터를 서버로 올바르게 전송하기 위해 파일
                            데이터 처리와 전송 방식 최적화 시도.
                          </li>
                        </ul>
                      </dd>
                      <dt className="font-semibold text-md text-[#5c4033]">
                        해결
                      </dt>
                      <dd className="text-[#7c584a]">
                        <ul className="list-disc pl-5">
                          <li>
                            {" "}
                            <code>FormData</code> 객체를 사용해 이미지 데이터를
                            서버로 전송하도록 구현하여 빈 데이터 전달 문제를
                            해결.
                          </li>
                          <li>
                            이미지 업로드 과정에서 파일 크기와 형식 제한 등을
                            검증하여 업로드 안정성을 높임.
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <h3 className="font-semibold text-lg text-[#5c4033]">
                      페이지 성능 최적화
                    </h3>
                    <dl className="space-y-4">
                      <dt className="font-semibold text-md text-[#5c4033]">
                        문제점
                      </dt>
                      <dd className="text-[#7c584a]">
                        페이지 로딩 속도가 느려 사용자 경험에 부정적인 영향을
                        미침.
                      </dd>
                      <dt className="font-semibold text-md text-[#5c4033]">
                        도전
                      </dt>
                      <dd className="text-[#7c584a]">
                        <ul className="list-disc pl-5">
                          <li>이미지 최적화를 통해 로딩 속도 개선.</li>
                          <li>
                            캐싱 및 lazy 로딩을 적용하여 초기 로딩 시간 단축.
                          </li>
                        </ul>
                      </dd>
                      <dt className="font-semibold text-md text-[#5c4033]">
                        해결
                      </dt>
                      <dd className="text-[#7c584a]">
                        <ul className="list-disc pl-5">
                          <li>LightHouse 성능 점수 50% 이상 향상.</li>
                          <li>사용자 피드백을 통해 긍정적인 반응 확인.</li>
                        </ul>
                      </dd>
                    </dl>
                  </dd> */
}
