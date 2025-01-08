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
            <p className="flex-grow"> 자기소개입니다. </p>
          </div>
          <div className="w-full border border-opacity-50 border-black"></div>
          <div className="flex gap-x-8">
            <h2 className="font-bold text-3xl min-w-52">Experience</h2>
            <p className="flex-grow"> 경험. </p>
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
