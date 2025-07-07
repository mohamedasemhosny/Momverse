import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { beforeExercise } from "@/constant";
import beforeProgram from "../../assets/before_program.png";


const BeforeActivaty = () => {
  return (
    <div className="container mx-auto px-3 space-y-10">
      <div>
        <h1 className="text-4xl font-semibold mb-6">Exercises</h1>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {beforeExercise.map((course, index) => (
            <SwiperSlide key={index} className="h-full">
              <div>
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full max-w-[400px]"
                />
                <h2 className="text-black text-2xl font-bold">
                  {course.title}
                </h2>
                <p className="text-xl">{course.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <h1 className="text-4xl font-semibold mb-6">Programs</h1>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index} className="h-full">
                <div>
                  <img
                    src={beforeProgram}
                    alt="before program"
                    className="w-full max-w-[400px]"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BeforeActivaty;
