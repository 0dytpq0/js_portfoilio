import { IProject } from "@/types/dataTypes";
import ProblemsItem from "../molecules/ProblemsItem";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProblemsSection({ problems }: { problems: IProject["problems"] }) {
  if (!problems) return null;

  return (
    <>
      <h1 className="font-bold text-3xl text-[#5c4033] my-4">문제 해결 목록</h1>
      <Swiper pagination={true} modules={[Pagination]}>
        {Object.values(problems).map((problem, index) => (
          <SwiperSlide key={problem.title}>
            <ProblemsItem
              key={index}
              title={problem.title}
              problem={problem.problem}
              challenge={problem.challenge}
              solution={problem.solution}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProblemsSection;
