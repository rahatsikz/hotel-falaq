import React from "react";
import { NavLink } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import "./Header.css";
import { Navbar } from "flowbite-react";
import { AuthContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLog = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Navbar className="bg-white px-2 sm:px-4 py-[16px]  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <span className="self-center flex items-center text-2xl font-bold whitespace-nowrap text-indigo-700 dark:text-white">
            <FaHotel /> &nbsp; Hotel Falaq
          </span>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <li className="block py-2 px-4 rounded md:bg-transparent text-lg md:mb-0 md:text-indigo-600 md:p-0 dark:text-white">
            <NavLink to="/" activeclassname="active" className="px-4">
              Home
            </NavLink>
          </li>

          {user?.email ? (
            <>
              <li className="block py-2 px-4 rounded md:bg-transparent text-lg md:mb-0 md:text-indigo-600 md:p-0 dark:text-white">
                <button
                  onClick={handleLog}
                  className="ml-[16px] text-indigo-600"
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="block py-2 px-4 rounded md:bg-transparent text-lg md:mb-0 md:text-indigo-600 md:p-0 dark:text-white">
                <NavLink to="/login" className="px-4">
                  Login
                </NavLink>
              </li>
              <li className="block py-2 px-4 rounded md:bg-transparent text-lg md:mb-0 md:text-indigo-600 md:p-0 dark:text-white">
                <NavLink to="/register" className="px-4">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
