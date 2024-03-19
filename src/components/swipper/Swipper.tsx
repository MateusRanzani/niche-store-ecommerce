"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Array criado para imagens do swipper
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

//Componente com temporizador de 5 segundos
//Renderiza imagens com dimensões diferentes no desktop e mobile

export const Swipper = () => {
  return (
    <Swiper
      pagination={true}
      loop={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {banners.map((item, index) => (
        <SwiperSlide key={index}>
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                className="flex md:hidden"
                src={item.srcMobile}
                alt={item.alt}
                width={650}
                height={750}
                priority
              />

              <Image
                className="w-full hidden md:flex"
                src={item.src}
                alt={item.alt}
                width={1700}
                height={600}
                priority
              />
            </div>
          </SwiperSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
