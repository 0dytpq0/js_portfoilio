import React, { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

function SliderWrapper({ children }: PropsWithChildren) {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={true}
      modules={[Pagination]}
      className="w-full h-full"
    >
      {children}
    </Swiper>
  );
}

export default SliderWrapper;
