import AfterActivaty from "@/components/layout/AfterActivaty";
import BeforeActivaty from "@/components/layout/BeforeActivaty";
import DuringActivaty from "@/components/layout/DuringActivaty";
import { useState } from "react";
import { FaPerson } from "react-icons/fa6";

const Activate = () => {
  const tapOptions = ["Before", "During", "After"];
  const [activeTap, setActiveTap] = useState("Before");

  return (
    <div className="text-black">
      <div className="bg-[#E5D8EA] pt-32 pb-7 space-y-10">
        <h1 className="text-3xl font-bold text-center">Activities</h1>

        <div className="flex justify-center gap-2 md:gap-5">
          {tapOptions.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTap(item)}
              className={`cursor-pointer flex items-center gap-1 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-xl shadow-md transition-all 
                ${
                  activeTap === item
                    ? "bg-[#B99C8B] text-white"
                    : "bg-white text-[#6B4D3E] border border-[#B99C8B]"
                }`}
            >
              <FaPerson className="mb-1 text-lg" />
              <span className="font-medium">{item}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="py-20 bg-white">
        {activeTap === "Before" && <BeforeActivaty />}
        {activeTap === "After" && <AfterActivaty />}
        {activeTap === "During" && <DuringActivaty />}
      </div>
    </div>
  );
};

export default Activate;
