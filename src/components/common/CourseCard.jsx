import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div className="bg-[#6C5C50] p-3 flex flex-col items-center gap-10 shadow-lg rounded-xl h-[340px]">
      <img
        src={course.img}
        alt={course.title}
        className="w-full"
      />
      <h2 className="text-2xl text-center font-bold">
        {course.title}
      </h2>
    </div>
  );
}

export default CourseCard