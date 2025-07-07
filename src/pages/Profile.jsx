import profileImg from "@/assets/profile_2.png";
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Profile</h1>

      <div className="flex flex-col items-center justify-center mt-4">
        <img src={profileImg} alt="" className="w-40 h-40 rounded-full" />
        <h2 className="text-xl font-semibold">nada mostafa</h2>
      </div>

      <div className="mt-5 space-y-5">
        <Link
          to="/editProfile"
          className="flex justify-between items-center shadow-md rounded-lg p-4 w-80"
        >
          <div className="text-lg font-semibold flex items-center gap-2">
            <FaRegUserCircle />
            Edit Profile
          </div>
          <IoIosArrowForward />
        </Link>

        <Link
          to="/fav"
          className="flex justify-between items-center shadow-md rounded-lg p-4 w-80"
        >
          <div className="text-lg font-semibold flex items-center gap-2">
            <FaHeart />
            Favorites
          </div>
          <IoIosArrowForward />
        </Link>

        <Link
          to="/settings"
          className="flex justify-between items-center shadow-md rounded-lg p-4 w-80"
        >
          <div className="text-lg font-semibold flex items-center gap-2">
            <FiSettings />
            Setting
          </div>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
