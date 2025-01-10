import Section from "@/components/Section";
import Link from "next/link";

export default function Home() {
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
          <div className="w-full border-t border-opacity-50 border-[#d1c3b4] mb-6"></div>
          <Section title="Personal">
            <p className="flex-grow text-[#7c584a] leading-relaxed">
              반갑습니다, 사용자 중심의 경험을 설계하는 이타적인 프론트엔드
              개발자 박요셉입니다. <br />
              저의 강점은 타인의 입장에서 생각하며 문제를 해결하려는 태도입니다.{" "}
              <br />
              사용자 관점에서 UX를 고민하고, 팀의 성과를 극대화하기 위해 협업과
              소통에 최선을 다합니다. <br /> 저는 문제 해결과 성능 최적화에 깊은
              관심을 가지고 있으며, 효율적인 코드 작성과 최적의 솔루션 도출을
              위해 끊임없이 질문하고 탐구합니다. <br /> 배움을 멈추지 않고
              성장하며, 팀과 함께 더 나은 결과를 만들어가는 데 기여하고
              싶습니다. 감사합니다.
            </p>
          </Section>

          <div className="w-full border-t border-opacity-50 border-[#d1c3b4] my-6"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl text-[#5c4033] min-w-52">
              Experience
            </h2>
            <div className="flex-grow text-[#7c584a]">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <dt className="font-semibold text-[#5c4033]">
                    (주) 다운 - 프론트엔드 개발자
                  </dt>
                  <dd>
                    2022.11 ~ 2023.05 <br />
                    <ul className="list-disc pl-5">
                      <li>
                        사내 윈도우 기반 프로그램을 웹 애플리케이션으로 전환 및
                        유지보수
                      </li>
                      <li>
                        자동 착유 및 방역 기계 조작 기능 클라이언트 구현 및 서버
                        작업 수행
                      </li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#5c4033]">
                    메멘토 AI - 프론트엔드 개발자
                  </dt>
                  <dd>
                    2024.10.21 ~ 2024.11.21 <br />
                    <ul className="list-disc pl-5">
                      <li>
                        병원 CRM 시스템의 사용자 인터페이스(UI) 설계 및 개발
                      </li>
                      <li>클라이언트와 서버 간 데이터 페칭 및 성능 최적화</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="w-full border-t border-opacity-50 border-[#d1c3b4] my-6"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl text-[#5c4033] min-w-52">
              Projects
            </h2>
            <div className="flex-grow text-[#7c584a]">
              <dl className="space-y-8">
                <div>
                  <dt className="font-semibold text-[#5c4033]">Travel Story</dt>
                  <dd>
                    <span>2024.07 ~ 2024.08</span> <br />
                    <span>
                      GitHub :
                      <Link
                        href={"https://github.com/0dytpq0"}
                        className="text-[#a16848] underline hover:text-[#7c584a]"
                      >
                        https://github.com/0dytpq0
                      </Link>
                    </span>
                    <p className="mt-4 leading-relaxed">
                      'Travel Story'는 유저들에게 여행에 대한 편의성을 제공하기
                      위해 개발한 플랫폼입니다. <br />
                      유저가 관심있는 여행지의 정보를 쉽게 얻고, 일정과 관광지를
                      공유 및 계획할 수 있도록 돕습니다.
                    </p>
                  </dd>
                  <dt className="mt-4 font-semibold text-[#5c4033]">
                    사용 기술
                  </dt>
                  <dd className="text-[#7c584a]">
                    TypeScript, Next.js, Supabase, Tanstack-Query, Zustand,
                    TailwindCss, Git, StoryBook, Vercel
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="w-full border-t border-opacity-50 border-[#d1c3b4] my-6"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl text-[#5c4033] min-w-52">
              Education
            </h2>
            <div className="flex-grow flex text-[#7c584a]">
              <div className="flex-grow">
                <span className="block font-semibold text-[#5c4033]">
                  2016.03 ~ 2024.03(졸업)
                </span>
                <span>호남 대학교 (영문학과)</span>
              </div>
              <div className="flex-grow">
                <span className="block font-semibold text-[#5c4033]">
                  2024.04 ~ 2024.09(수료)
                </span>
                <span>내일배움캠프 React 5기 부트캠프</span>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-opacity-50 border-[#d1c3b4] my-6"></div>
          <div className="flex gap-x-8">
            <div className="flex-col">
              <h2 className="font-bold text-3xl text-[#5c4033] min-w-52">
                Skills
              </h2>
              <span className="text-lg text-[#7c584a]">(tech - soft)</span>
            </div>
            <div className="flex flex-grow">
              <div className="flex-grow flex flex-col">
                <span className="font-semibold text-[#5c4033]">Next.js</span>
                <span className="font-semibold text-[#5c4033]">React.js</span>
                <span className="font-semibold text-[#5c4033]">
                  Tailwind CSS
                </span>
                <span className="font-semibold text-[#5c4033]">Git</span>
                <span className="font-semibold text-[#5c4033]">TypeScript</span>
                <span className="font-semibold text-[#5c4033]">JavaScript</span>
                <span className="font-semibold text-[#5c4033]">
                  Tanstack Query
                </span>
                <span className="font-semibold text-[#5c4033]">Node.js</span>
              </div>
              <div className="flex-grow flex flex-col">
                <span className="font-semibold text-[#5c4033]">책임 의식</span>
                <span className="font-semibold text-[#5c4033]">적응력</span>
                <span className="font-semibold text-[#5c4033]">협업 능력</span>
                <span className="font-semibold text-[#5c4033]">
                  비판적 사고
                </span>
                <span className="font-semibold text-[#5c4033]">시간 관리</span>
                <span className="font-semibold text-[#5c4033]">끈기</span>
                <span className="font-semibold text-[#5c4033]">유연성</span>
                <span className="font-semibold text-[#5c4033]">팀워크</span>
              </div>
            </div>
          </div>
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
