import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const banners = [
  {
    src: "https://drive.google.com/uc?export=view&id=1a-XDfrQlUKIvN7FZu3ek4Kf3ZulCfixO",
    alt: "Cyber monday eletronics sale",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=14ueKeeOBp2rs9JVwW8RhcPizCoLCYx-6",
    alt: "Cyber monday eletronics sale",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1nZDj3M2Ey1gPY2uTuHXqqklFy3Jytzw6",
    alt: "Cyber monday eletronics sale",
  },

  {
    src: "https://drive.google.com/uc?export=view&id=1bWACNEpHeoGylteXFpHEa3QA9zpfLWEy",
    alt: "Cyber monday eletronics sale",
  },

  {
    src: "https://drive.google.com/uc?export=view&id=1mlCCenrthkunyBUl4lm-9rXZ2SevEKoR",
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
        <SwiperSlide>
          <div className="relative w-full h-full"></div>
          <Image src={item.src} alt={item.alt} width={1400} height={600} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
