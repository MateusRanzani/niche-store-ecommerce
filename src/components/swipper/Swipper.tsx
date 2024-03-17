import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const banners = [
  {
    src: "https://drive.google.com/uc?export=view&id=1ijOClNufSQFjs4farTNn6ZV30nc_pMLj",
    alt: "Cyber monday eletronics sale",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1ypfOJNBLqEygX5sXgfvturFMJw0qe7jm",
    alt: "Cyber monday eletronics sale",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1X_Bp0TsxBR1_MQVlbLn-Zdq48vlgvOTc",
    alt: "Cyber monday eletronics sale",
  },

  {
    src: "https://drive.google.com/uc?export=view&id=1CiPGFGAT20vuFVVhAzCZUvprlYLJNwoO",
    alt: "Cyber monday eletronics sale",
  },

  {
    src: "https://drive.google.com/uc?export=view&id=130c2vxfVWXi-IK41g_dMlHFBtXQqgGwf",
    alt: "Cyber monday eletronics sale",
  },
];

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
      {banners.map((item, index) => (
        <SwiperSlide key={index}>
          <Image src={item.src} alt={item.alt} width={1700} height={600} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
