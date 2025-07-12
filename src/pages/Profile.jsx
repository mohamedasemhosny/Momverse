import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegUserCircle, FaHeart } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Profile</h1>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
          <FaRegUserCircle className="text-6xl text-gray-500" />
        </div>
        <h2 className="text-xl font-semibold capitalize mt-2">
          {user?.username || user?.name || 'User'}
        </h2>
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
          to="/changePassword"
          className="flex justify-between items-center shadow-md rounded-lg p-4 w-80"
        >
          <div className="text-lg font-semibold">Change Password</div>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Profile;