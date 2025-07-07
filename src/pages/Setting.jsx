import ToggleSwitch from "@/components/common/ToggleSwitch";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center m-2">
      <div className="mt-5 space-y-5">
        <Link
          to="/changePassword"
          className="flex justify-between items-center shadow-md rounded-lg p-4 w-80"
        >
          <div className="text-lg font-semibold">Change Password</div>
          <IoIosArrowForward />
        </Link>

        <Link
          to="/language"
          className="flex justify-between items-center shadow-md rounded-lg p-4 w-80"
        >
          <div className="text-lg font-semibold">Language</div>
          <IoIosArrowForward />
        </Link>

        <div className="flex justify-between items-center shadow-md rounded-lg p-4 w-80">
          <div className="text-lg font-semibold">Dark Mode</div>
          <ToggleSwitch />
        </div>

        <div className="flex justify-between items-center shadow-md rounded-lg p-4 w-80">
          <div className="text-lg font-semibold">Notification</div>
          <ToggleSwitch />
        </div>

        <Link
          to="/security"
          className="flex justify-between items-center shadow-md rounded-lg p-4 w-80"
        >
          <div className="text-lg font-semibold">Security</div>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Setting;
