import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export const Swipper = () => {
  return (
    <Swiper
      pagination={true}
      loop={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative w-full h-full"></div>
        <Image
          src="https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75"
          alt=""
          width={2244}
          height={600}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full"></div>
        <Image
          src="https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75"
          alt=""
          width={2244}
          height={600}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full"></div>
        <Image
          src="https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75"
          alt=""
          width={2244}
          height={600}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full"></div>
        <Image
          src="https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75"
          alt=""
          width={2244}
          height={600}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full"></div>
        <Image
          src="https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75"
          alt=""
          width={2244}
          height={600}
        />
      </SwiperSlide>
    </Swiper>
  );
}
