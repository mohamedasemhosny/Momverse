import { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="checkboxInput"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden"
      />
      <label
        htmlFor="checkboxInput"
        className={`
          relative w-[40px] h-[20px] rounded-full cursor-pointer
          transition-all duration-200 ease-in-out
          ${isChecked ? "bg-purple-500" : "bg-gray-600"}
        `}
      >
        <span
          className={`
            absolute left-[5px] top-1/2 -translate-y-1/2
            w-[10px] h-[10px] rounded-full
            border-[5px] border-white
            transition-all duration-200 ease-in-out
            ${isChecked ? "translate-x-[20px] bg-white" : "bg-transparent"}
            shadow-[5px_2px_7px_rgba(8,8,8,0.26)]
          `}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
