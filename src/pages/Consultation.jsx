import InputFelid from "@/components/common/InputFelid";
import category_1 from "../assets/category_1.png";
import category_2 from "../assets/category_2.png";
import category_3 from "../assets/category_3.png";
import category_4 from "../assets/category_4.png";
import { Link } from "react-router-dom";
import { doctorList } from "@/constant";

const Consultation = () => {
  return (
    <div className="container mx-auto px-3 my-20 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">doctor appointment</h1>

      <InputFelid
        type="text"
        label="Search Doctor"
        name="search"
        placeholder="Search for a doctor..."
      />

      <div>
        <h2 className="text-2xl font-bold mb-10">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <img src={category_1} alt="category" />
          <img src={category_2} alt="category" />
          <img src={category_3} alt="category" />
          <img src={category_4} alt="category" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-10">Top Doctors</h2>

        <div className="space-y-5">
          {doctorList.map((doctor, index) => (
            <Link
              to={`/doctor/${doctor.id}`}
              key={index}
              className="bg-secondary rounded-xl shadow-lg p-5 flex gap-10"
            >
              <img src={doctor.img} alt={doctor.name} className="w-20" />
              <div className="flex flex-col gap-2 text-[#78B3CE]">
                <p className="text-xl font-semibold">{doctor.speciality}</p>
                <h3 className="text-2xl font-bold">{doctor.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultation;
