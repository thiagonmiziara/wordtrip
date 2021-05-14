import { ReactNode } from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, A11y]);

interface SwiperComponentProps {
  children: ReactNode;
}


const SwiperComponent = ({children}:SwiperComponentProps) => {
  return (
    <Swiper
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{ delay: 4000 }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          {children}
        </SwiperSlide>
      </Swiper>
  )
}

export default SwiperComponent
