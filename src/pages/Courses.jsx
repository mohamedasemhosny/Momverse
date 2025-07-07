import CourseCard from "@/components/common/CourseCard";
import { courses } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Courses = () => {
  return (
    <div className="container mx-auto px-3 my-10">
      {courses.map((course, index) => (
        <div key={index} className="mb-10">
          <h1 className="text-3xl font-bold mb-5">{course.title}</h1>
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
              {course.data.map((course, index) => (
                <SwiperSlide key={index} className="h-full">
                  <CourseCard key={index} course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      ))}
    </div>
  );
};

export default Courses;
