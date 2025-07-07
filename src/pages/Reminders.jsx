import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Reminders = () => {
  const [date, setDate] = useState(new Date());
  const [events, _] = useState([]); 

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f3e8e1] p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#6C5C50] mb-6">Reminders</h1>

      <div className="w-full max-w-[1000px] bg-white rounded-2xl shadow-xl p-8">
        <Calendar
          localizer={localizer}
          events={events}
          defaultView="month"
          onNavigate={(newDate) => setDate(newDate)}
          style={{ height: 500 }}
        />

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-[#6C5C50]">
            Selected Date:
          </h2>
          <p className="text-gray-700 mt-2 text-lg">{date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
