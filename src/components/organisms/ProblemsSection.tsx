import { IProject } from "@/types/dataTypes";
import ProblemsItem from "../molecules/ProblemsItem";
import "swiper/css";
import "swiper/css/pagination";

import { SwiperSlide } from "swiper/react";
import SliderWrapper from "../atoms/SliderWrapper";

function ProblemsSection({ problems }: { problems: IProject["problems"] }) {
  if (!problems) return null;

  const makeProblemsList = () => (
    <>
      {Object.values(problems).map((problem) => (
        <SwiperSlide key={problem.title}>
          <ProblemsItem
            title={problem.title}
            problem={problem.problem}
            challenge={problem.challenge}
            solution={problem.solution}
          />
        </SwiperSlide>
      ))}
    </>
  );

  return (
    <>
      <h1 className="font-bold text-3xl text-[#5c4033] my-4">문제 해결 목록</h1>
      <SliderWrapper>{makeProblemsList()}</SliderWrapper>
    </>
  );
}

export default ProblemsSection;
