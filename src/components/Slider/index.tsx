import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentSlider from "./ContentSlider";
SwiperCore.use([Navigation, Pagination, A11y]);

const Slider = () => {
  return (
    <>
      <Flex
        w="100%"
        maxW="1240px"
        mx="auto"
        mb={["5", "10"]}
        h={["250px", "450px"]}
      >
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{ width: "100%", flex: "1" }}
        >
          <SwiperSlide>
           <ContentSlider/>
          </SwiperSlide>

          <SwiperSlide>
            <ContentSlider/>
          </SwiperSlide>

          <SwiperSlide>
            <ContentSlider/>
          </SwiperSlide>
          
        </Swiper>
      </Flex>
    </>
  );
};

export default Slider;
