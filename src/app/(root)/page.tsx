import Link from "next/link";

export default function Home() {
  return (
    <div className="m-auto rounded-lg h-screen bg-slate-500 container">
      <main className="flex p-8 h-full w-full">
        <section className="flex flex-col w-1/4 gap-y-10">
          <h1 className="font-bold text-7xl">
            Joseph <br />
            Park
          </h1>
          <p className="font-bold text-lg">
            Phone : 010-3146-0962 <br />
            Email : rkfnahs12e@gmail.com <br />
            GitHub :
            <Link href={"https://github.com/0dytpq0"}>
              https://github.com/0dytpq0
            </Link>
            <br />
            Blog :
            <Link href={"https://velog.io/@0dytpq0/posts"}>
              https://velog.io/@0dytpq0/posts
            </Link>
            <br />
          </p>
          <span className="font-bold text-6xl mt-40">
            Frontend <br /> Developer
          </span>
          <div className="bg-black w-full flex-grow">image</div>
        </section>
        <section className="flex-grow">
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl min-w-52">Personal</h2>
            <p className="flex-grow">
              반갑습니다, 사용자 중심의 경험을 설계하는 이타적인 프론트엔드
              개발자 박요셉입니다. <br />
              저의 강점은 타인의 입장에서 생각하며 문제를 해결하려는 태도입니다.
              <br />
              사용자 관점에서 UX를 고민하고, 팀의 성과를 극대화하기 위해 협업과
              소통에 최선을 다합니다. <br /> 저는 문제 해결과 성능 최적화에 깊은
              관심을 가지고 있으며, 효율적인 코드 작성과 최적의 솔루션 도출을
              위해 끊임없이 질문하고 탐구합니다. <br /> 배움을 멈추지 않고
              성장하며, 팀과 함께 더 나은 결과를 만들어가는 데 기여하고
              싶습니다. 감사합니다.
            </p>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl min-w-52">Experience</h2>
            <div className="flex-grow ">
              <dl className="grid grid-cols-2 gap-x-4">
                <div>
                  <dt>(주) 다운 - 프론트엔드 개발자 </dt>
                  <dd>
                    2022.11 ~ 2023.05 <br />
                    <ul>
                      <li>
                        사내 윈도우 기반 프로그램을 웹 애플리케이션으로 전환 및
                        유지보수
                      </li>
                      <li>
                        자동 착유 및 방역 기계 조작 기능 클라이언트 구현 및 서버
                        작업 수행
                      </li>
                    </ul>
                    <h3>담당 업무</h3>
                    <ul>
                      <li>
                        비대면 차량 소독 시스템 웹 애플리케이션 풀스텍 개발
                      </li>
                      <li>
                        실시간 목장 관리 어플리케이션 실시간 데이터 처리 및
                        사용자 인터페이스 구현
                      </li>
                      <li>농장 데이터베이스 백업 및 동기화 프로그램 구현 </li>
                    </ul>
                    <div>
                      <h3>사용 기술</h3>
                      <span>React, Node.js, MQTT, MySQL, TCP</span>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt>메멘토 AI - 프론트엔드 개발자</dt>
                  <dd>
                    2024.10.21 ~ 2024.11.21 <br />
                    <ul>
                      <li>
                        병원 CRM 시스템의 사용자 인터페이스(UI) 설계 및 개발
                      </li>
                      <li>클라이언트와 서버 간 데이터 페칭 및 성능 최적화</li>
                    </ul>
                    <h3>담당 업무</h3>
                    <ul>
                      <li>병원 CRM UI 구현 (Tailwind CSS 및 Radix UI 활용)</li>
                      <li>React Query를 활용한 데이터 상태 관리 및 최적화</li>
                    </ul>
                    <div>
                      <h3>사용 기술</h3>
                      <span>
                        React, React Query, Tailwind CSS, Radix UI, Git
                      </span>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl min-w-52">Projects</h2>
            <div className="flex-grow">
              <dl>
                <dt>Travel Story</dt>
                <dd>
                  <span>2024.07 ~ 2024.08</span> <br />
                  <span>
                    GitHub :
                    <Link href={"https://github.com/0dytpq0"}>
                      {" "}
                      https://github.com/0dytpq0
                    </Link>
                  </span>
                  <p>
                    'Travel Story'는 유저들에게 여행에 대한 편의성을 제공하기
                    위해 개발한 플랫폼입니다. <br />
                    유저가 관심있는 여행지의 정보를 쉽게 얻고, 일정과 관광지를
                    공유 및 계획할 수 있도록 돕습니다.
                  </p>
                </dd>
                <dt>제공 서비스</dt>
                <dd>
                  <ul>
                    <li>여행 정보 제공</li>
                    <li>계획 기반 여행 경로 표시 (Google Map API)</li>
                    <li>일정 공유 (Kakao API)</li>
                  </ul>
                </dd>
                <dt>담당 역할</dt>
                <dd>
                  <ul>
                    <li>정보 제공 페이지 구현</li>
                    <li>여행 일정 추가 및 생성 기능 구현</li>
                    <li>북마크 기능 구현</li>
                    <li>성능 및 SEO 최적화</li>
                  </ul>
                </dd>
                <dl className="space-y-6">
                  <dt className="text-xl font-bold">문제 해결 목록</dt>
                  <dd className="mt-2">
                    <h3 className="text-lg font-semibold my-4">북마크 기능</h3>
                    <dl className="space-y-4">
                      <dt className="text-md font-semibold">문제점</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>
                            Hook에서 API 호출 로직을 관리하고 있었으나, 다수의
                            컴포넌트가 생성될 때마다 각 컴포넌트에서 동일한
                            네트워크 요청을 중복으로 발생시키는 문제.
                          </li>
                          <li>
                            React-Query의 낙관적 업데이트 로직에서 사용해야 하는
                            데이터 규격이 API response 데이터와 다르게 설계되어,
                            데이터 일관성이 깨지며 업데이트 실패 발생.
                          </li>
                        </ul>
                      </dd>

                      <dt className="text-md font-semibold">도전</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>
                            API 호출 중복 문제를 해결하기 위해 Hook을 전역 상태
                            관리로 이동하여, 요청 로직을 중앙 집중화 시도.
                          </li>
                          <li>
                            lazy 로딩을 적용하여 컴포넌트가 필요한 시점에만
                            Hook을 호출하도록 개선.
                          </li>
                          <li>
                            중복 렌더링을 방지하기 위해 컴포넌트 렌더링 최적화.
                          </li>
                          <li>
                            낙관적 업데이트가 정상적으로 작동하도록, react-query
                            문서에 따라 response 데이터를 기반으로 규격화된 임시
                            데이터를 생성.
                          </li>
                        </ul>
                      </dd>

                      <dt className="text-md font-semibold">해결</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>
                            lazy 로딩과 렌더링 최적화를 통해 Hook의 호출을
                            최소화하여 성능 문제 해결
                          </li>
                          <li>
                            react-query 낙관적 업데이트 규격에 맞는 데이터
                            규격을 구현하여, 데이터 불일치 문제를 해결하고,
                            업데이트 성공률을 100%로 개선.
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </dd>

                  <dd className="mt-2">
                    <h3 className="text-lg font-semibold my-4">
                      관광지별 리뷰 작성 기능
                    </h3>
                    <dl className="space-y-4">
                      <dt className="text-md font-semibold">문제점</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>
                            유저가 리뷰 작성 시 이미지 첨부 기능에서, 서버로 빈
                            파일 데이터가 전달되는 문제 발생.
                          </li>
                        </ul>
                      </dd>
                      <dt className="text-md font-semibold">도전</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>
                            이미지 데이터를 서버로 올바르게 전송하기 위해 파일
                            데이터 처리와 전송 방식 최적화 시도.
                          </li>
                        </ul>
                      </dd>
                      <dt className="text-md font-semibold">해결</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>
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
                  </dd>
                  <dd className="mt-4">
                    <h3 className="text-lg font-semibold">
                      페이지 성능 최적화
                    </h3>
                    <dl className="space-y-4">
                      <dt className="text-md font-semibold">문제점</dt>
                      <dd className="mt-2">
                        페이지 로딩 속도가 느려 유저 경험에 부정적인 영향을
                        미침.
                      </dd>

                      <dt className="text-md font-semibold">도전</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>
                            불필요한 이미지 로드를 줄이고, 적절한 크기와 포맷을
                            사용하여 로딩 속도 개선 시도.
                          </li>
                          <li>
                            lazy 로딩으로 페이지별 불필요한 자바스크립트 로드를
                            줄여 성능 최적화 시도.
                          </li>
                          <li>
                            자주 사용되는 데이터를 캐싱하여 페이지 로드 시간
                            단축 시도.
                          </li>
                        </ul>
                      </dd>
                      <dt className="text-md font-semibold">해결</dt>
                      <dd className="mt-2">
                        <ul className="list-disc pl-5">
                          <li>LightHouse 기반 평균 점수 50% 이상 향상</li>
                          <li>
                            로딩 속도 체감을 조사한 결과, 대다수가 긍정적 반응을
                            보였음.
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </dd>
                </dl>
                <dt>사용 기술</dt>
                <dd>
                  TypeScript, Next.js, Supabase, Tanstack-Query, Zustand,
                  TailwindCss, Git, StoryBook, Vercel
                </dd>
              </dl>
            </div>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl min-w-52">Education</h2>
            <div className="flex-grow">
              <div>
                <span>2016.03 ~ 2024.03(졸업)</span>
                <span>호남 대학교 (영문학과)</span>
              </div>
              <div>
                <span>2024.04 ~ 2024.09(수료)</span>
                <span>내일배움캠프 React 5기 부트캠프</span>
              </div>
            </div>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <div className="flex-col">
              <h2 className="font-bold text-3xl min-w-52">Skills</h2>
              <span className="text-lg">(tech - soft)</span>
            </div>
            <div className="flex flex-grow ">
              <div className="flex-grow"> tech 기술 </div>
              <div className="flex-grow"> soft 기술 </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
