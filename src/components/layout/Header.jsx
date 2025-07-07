import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { FiSearch } from "react-icons/fi";
import { getProfile, logout } from "@/features/auth/authSlice";
import { links } from "@/constant";
import ToggleMenu from "./ToggleMenu";
import logo from "@/assets/logo.svg";
import userProfile from "@/assets/profile_1.png";

const Header = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (token && !user) {
      dispatch(getProfile());
    }
  }, [dispatch, token, user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const isActive = (path) =>
    pathname === path ? "text-[#6C5C50]" : "text-white";

  return (
    <div className="py-2 px-7 flex items-center justify-between shadow-lg bg-[#bc9f8b] sticky top-0 z-50">
      <Link to="/">
        <img src={logo} alt="logo" className="w-12" />
      </Link>

      {/* Desktop Navigation */}
      <div className="items-center gap-10 hidden sm:flex">
        <div className="items-center space-x-10 flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-semibold hover:text-[#6C5C50] duration-200 ${isActive(
                link.path
              )}`}
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <Link
              to="/profile"
              className={`text-xl font-semibold hover:text-[#6C5C50] duration-200 ${isActive(
                "/profile"
              )}`}
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/signin"
              className={`text-xl font-semibold hover:text-[#6C5C50] duration-200 ${isActive(
                "/signin"
              )}`}
            >
              Sign In
            </Link>
          )}

          <FiSearch className="text-2xl font-bold cursor-pointer" />
        </div>

        {/* Profile Dropdown */}
        {user && (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
              <img
                src={userProfile}
                alt="profile"
                className="size-9 rounded-full cursor-pointer"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-150 ease-out"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition duration-100 ease-in"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 p-3">
                <div className="px-3 py-2 border-b mb-2">
                  <p className="font-semibold text-sm text-black">{user.username}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } cursor-pointer text-red-600 w-full text-left px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="items-center gap-2 flex sm:hidden">
        {user && (
          <img
            src={userProfile}
            alt="user profile"
            className="size-9 rounded-full"
          />
        )}
        <ToggleMenu menus={links} />
      </div>
    </div>
  );
};

export default Header;
