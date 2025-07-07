import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { Menu } from "@headlessui/react";
import logo from "@/assets/logo.svg";
import userProfile from "@/assets/profile_1.png";
import { links } from "@/constant";
import { logout } from "@/features/auth/authSlice";

const ToggleMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
    setOpen(false);
  };

  return (
    <div className="sm:hidden flex">
      <IoMenu onClick={toggleMenu} className="cursor-pointer" size={35} />

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-10 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Slide-in menu */}
        <div
          className={`fixed top-0 right-0 h-screen bg-[#bc9f8b] w-[270px] p-4 rounded-l-lg shadow-lg flex flex-col items-center justify-center gap-5 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <IoClose
            onClick={toggleMenu}
            className="cursor-pointer absolute top-5 left-5 text-black"
            size={35}
          />

          <img src={logo} alt="logo" />

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="text-xl text-black font-semibold hover:text-[#6C5C50] duration-200"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <Menu as="div" className="relative w-full px-4">
              <Menu.Button className="flex items-center gap-3 w-full">
                <img
                  src={userProfile}
                  alt="user"
                  className="size-10 rounded-full"
                />
                <div className="text-left">
                  <p className="text-sm font-bold">{user.username}</p>
                  <p className="text-xs text-gray-700">{user.email}</p>
                </div>
              </Menu.Button>

              <div className="mt-4 space-y-3 text-center">
                <Link
                  to="/profile"
                  onClick={toggleMenu}
                  className="block text-sm text-black font-semibold hover:text-[#6C5C50]"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block text-sm text-red-600 font-semibold"
                >
                  Logout
                </button>
              </div>
            </Menu>
          ) : (
            <Link
              to="/signin"
              onClick={toggleMenu}
              className="text-xl text-black font-semibold hover:text-[#6C5C50] duration-200"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
