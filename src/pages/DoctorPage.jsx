import { doctorList } from "@/constant";
import { BsCameraVideoFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import Button from "@/components/common/Button";
import { useState } from "react";

const days = [
  { day: "Sat 08" },
  { day: "Sun 09" },
  { day: "Mon 10" },
  { day: "Tue 11" },
  { day: "Wed 12" },
  { day: "Thu 13" },
  { day: "Fri 14" },
];

const times = [
  {
    time: "08:00 AM",
  },
  {
    time: "09:00 AM",
  },
  {
    time: "10:00 AM",
  },
  {
    time: "11:00 AM",
  },
  {
    time: "12:00 PM",
  },
];

const DoctorPage = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const toggleTime = (time) => {
    setSelectedTime(selectedTime === time ? null : time);
  };

  const toggleDay = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const { id } = useParams();
  const doctor = doctorList.find((doctor) => doctor.id == id);
  return (
    <div className="my-10 px-3 flex flex-col items-center justify-center gap-10">
      <img src={doctor.img} alt="" className="w-40 h-40 rounded-full" />
      <div className="space-y-3 text-center">
        <h2 className="text-2xl font-bold">{doctor.name}</h2>
        <p className="text-lg font-semibold">{doctor.speciality}</p>
        <p className="text-lg font-semibold max-w-lg">{doctor.description}</p>
      </div>
      <div className="flex gap-5 md:gap-10">
        <FaPhoneAlt className="text-3xl bg-[#78B3CE] size-16 rounded-full p-4" />
        <BsCameraVideoFill className="text-3xl bg-[#78B3CE] size-16 rounded-full p-4" />
        <CgMenuGridO className="text-3xl bg-[#78B3CE] size-16 rounded-full p-4" />
      </div>

      <div className="space-y-5"></div>
      <h2 className="text-2xl font-bold">June 2022</h2>
      <div className="space-y-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 md:gap-10">
          {days.map((date, index) => (
            <div
              onClick={() => toggleDay(date.day)}
              key={index}
              className={`cursor-pointer flex items-center justify-center gap-2 size-36 rounded-[56px] p-4 shadow-lg ${
                selectedDay === date.day
                  ? "bg-primary text-white"
                  : "bg-white text-[#78B3CE]"
              }`}
            >
              <p className="text-2xl font-bold">{date.day}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10">
          {times.map((date, index) => (
            <div
              onClick={() => toggleTime(date.time)}
              key={index}
              className={`cursor-pointer flex items-center justify-center gap-2 rounded-[56px] p-4 shadow-lg  ${
                selectedTime === date.time
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              <p className="text-2xl font-bold">{date.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Button name="Book An Appointment" className="bg-[#78B3CE] px-20" />
      </div>
    </div>
  );
};

export default DoctorPage;
