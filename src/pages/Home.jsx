import banner_2 from "../assets/banner_2.jpg";
import banner_3 from "../assets/banner_3.jpg";
import banner_4 from "../assets/banner_4.jpg";
import banner_5 from "../assets/banner_5.jpg";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const banners = [
  {
    img: banner_2,
    title: "You're strong every day is a chance to shine as a mom.",
  },
  {
    img: banner_3,
    title: "You're doing great every small act of love matters.",
  },
  {
    img: banner_4,
    title: "Tough days grow beautiful souls keep going.",
  },
  {
    img: banner_5,
    title: "Quiet efforts shape strong hearts you’re showing up.",
  },
];

const Home = () => {
  return (
    <div>
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
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40 z-10"></div>
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

      <div className="container max-w-6xl px-3 mx-auto my-36 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
