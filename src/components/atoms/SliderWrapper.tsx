import React, { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SliderWrapper({ children }: PropsWithChildren) {
  return (
    <Swiper pagination={true} modules={[Pagination]}>
      {children}
    </Swiper>
  );
}

export default SliderWrapper;
