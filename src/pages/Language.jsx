import ToggleSwitch from "@/components/common/ToggleSwitch";
import { IoIosArrowForward } from "react-icons/io";

const Language = () => {
  return (
    <div className="h-[calc(100vh-90px)] flex flex-col items-center justify-center m-2">
      <h1 className="text-2xl font-bold">preferred languages</h1>
      <div className="mt-5 space-y-10">
        <div className="flex justify-between items-center shadow-md rounded-lg p-4 w-80">
          <div className="text-lg font-semibold">English (UK)</div>
          <ToggleSwitch />
        </div>

        <div className="flex justify-between items-center shadow-md rounded-lg p-4 w-80">
          <div className="text-lg font-semibold">Arabic</div>
          <ToggleSwitch />
        </div>

        <input
          type="text"
          placeholder="Add a language..."
          className="w-80 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Language;
