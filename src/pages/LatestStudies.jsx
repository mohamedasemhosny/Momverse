import banner_1 from "../assets/banner_6.jpg";
import banner_2 from "../assets/banner_7.jpg";
import banner_3 from "../assets/banner_8.jpg";
import banner_4 from "../assets/banner_9.png";
import latest_1 from "../assets/latest_1.png";
import latest_2 from "../assets/latest_2.png";
import latest_3 from "../assets/latest_3.png";
import latest_4 from "../assets/latest_4.png";
import latest_5 from "../assets/latest_5.png";
import latest_6 from "../assets/latest_6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const banners = [
  {
    img: banner_4,
    title: "Newborn Feeding Schedule",
  },
  {
    img: banner_1,
    title: "You're strong every day is a chance to shine as a mom.",
  },
  {
    img: banner_2,
    title: "You're doing great every small act of love matters.",
  },
  {
    img: banner_3,
    title: "Tough days grow beautiful souls keep going.",
  },
];

const latests = [
  { title: "Baby Growth and Development", img: latest_1 },
  { title: "Top tips to help your baby's development", img: latest_2 },
  { title: "What is the 5 5 5 rule after birth?", img: latest_3 },
  { title: "How to take care of a baby after birth?", img: latest_4 },
  { title: "What are the 7 types of vaccines?", img: latest_5 },
  { title: "Feeding 4 month old baby food", img: latest_6 },
];

const LatestStudies = () => {
  return (
    <div className="pb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary/40 z-10"></div>
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full md:h-[calc(100vh-70px)] h-[300px] object-cover"
              />
              <p className="text-center md:max-w-3xl leading-[1.2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-bold text-white z-20">
                {banner.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container px-3 mx-auto mt-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {latests.map((latest, index) => (
          <div key={index} className="flex items-center relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary/40 z-10 rounded-[80px]"></div>
            <img src={latest.img} alt={latest.title} className="w-full" />
            <h2 className="text-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
              {latest.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestStudies;
