"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import useWindowSize from "@/utils/windows-size";

const banners = [
  {
    src: "https://drive.google.com/uc?export=view&id=1ijOClNufSQFjs4farTNn6ZV30nc_pMLj",
    srcMobile:
      "https://drive.google.com/uc?export=view&id=1H5YCRXj9PWmUbNLRWSW5dCyAuJRbl1XR",
    alt: "Cyber monday eletronics sale",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1ypfOJNBLqEygX5sXgfvturFMJw0qe7jm",
    srcMobile:
      "https://drive.google.com/uc?export=view&id=1lYkno_Z6E2gt1n4qENisRGIYCcFtYXTW",
    alt: "Cyber monday eletronics sale",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1X_Bp0TsxBR1_MQVlbLn-Zdq48vlgvOTc",
    srcMobile:
      "https://drive.google.com/uc?export=view&id=1jnl6iUqoCd4AnB0tQ-4yO8obJmo4mXaD",
    alt: "Cyber monday eletronics sale",
  },

  {
    src: "https://drive.google.com/uc?export=view&id=1CiPGFGAT20vuFVVhAzCZUvprlYLJNwoO",
    srcMobile:
      "https://drive.google.com/uc?export=view&id=1RF1Xgt9ITileHmAn2hi-KgnksjnTTS8e",
    alt: "Cyber monday eletronics sale",
  },

  {
    src: "https://drive.google.com/uc?export=view&id=130c2vxfVWXi-IK41g_dMlHFBtXQqgGwf",
    srcMobile:
      "https://drive.google.com/uc?export=view&id=1kFKbV8hpza_WsAmAkBsxUdfvI6fxMURw",
    alt: "Cyber monday eletronics sale",
  },
];

export const Swipper = () => {
  const { width }: any = useWindowSize();

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
      {banners.map((item, index) => (
        <SwiperSlide key={index}>
          {width >= 768 ? (
            <Image src={item.src} alt={item.alt} width={1700} height={600} />
          ) : (
            <Image
              src={item.srcMobile}
              alt={item.alt}
              width={650}
              height={750}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
