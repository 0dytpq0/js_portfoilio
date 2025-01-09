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
            <div className="flex-grow">
              <dl className="">
                <dt>(주) 다운 - 프론트엔드 개발자 </dt>
                <dd>
                  2022.11 ~ 2023.05 <br />
                  <ul className="list-disc">
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
                  <ul className="list-disc">
                    <li>비대면 차량 소독 시스템 웹 애플리케이션 풀스텍 개발</li>
                    <li>
                      실시간 목장 관리 어플리케이션 실시간 데이터 처리 및 사용자
                      인터페이스 구현
                    </li>
                    <li>농장 데이터베이스 백업 및 동기화 프로그램 구현 </li>
                  </ul>
                  <div>
                    <h3>사용 기술</h3>
                    <span>React, Node.js, MQTT, MySQL, TCP</span>
                  </div>
                </dd>

                <dt>메멘토 AI - 프론트엔드 개발자</dt>
                <dd>
                  2024.10.21 ~ 2024.11.21 <br />
                  <ul className="list-disc">
                    <li>
                      병원 CRM 시스템의 사용자 인터페이스(UI) 설계 및 개발
                    </li>
                    <li>클라이언트와 서버 간 데이터 페칭 및 성능 최적화</li>
                  </ul>
                  <h3>담당 업무</h3>
                  <ul className="list-disc">
                    <li>병원 CRM UI 구현 (Tailwind CSS 및 Radix UI 활용)</li>
                    <li>React Query를 활용한 데이터 상태 관리 및 최적화</li>
                  </ul>
                  <div>
                    <h3>사용 기술</h3>
                    <span>
                      {" "}
                      React, React Query, Tailwind CSS, Radix UI, Git
                    </span>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl min-w-52">Projects</h2>
            <p className="flex-grow"> 프로젝트 목록. </p>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl min-w-52">Education</h2>
            <p className="flex-grow"> 교육기관. </p>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <div className="flex-col">
              <h2 className="font-bold text-3xl min-w-52">Skills</h2>
              <span className="text-lg">(tech - soft)</span>
            </div>
            <div className="flex flex-grow ">
              <p className="flex-grow"> tech 기술 </p>
              <p className="flex-grow"> soft 기술 </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
