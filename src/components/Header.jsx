import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { getCities } from "../../store/actions/citiesActions";
import { logout } from "../../store/actions/authActions";
import "../../src/index.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = useSelector((state) => state.authStore.token); // Token del usuario
  const user = useSelector((state) => state.userSignUpReducer.users3); // Información del usuario
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    dispatch( logout()); // Acción de logout
    navigate("/"); // Redirige al login tras cerrar sesión
  };

  return (
    <div className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img alt="Logo" className="h-10" src={Logo} />
          <span className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyTinerary
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {token ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 dark:text-white">
                Welcome, {user?.name || "User"}
              </span>
              <button
                onClick={handleSignOut}
                className="py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded-lg"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink
              to="/sign-in"
              className="py-2 px-4 text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
            >
              Sign In
            </NavLink>
          )}
          <button
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1h15M1 7h15M1 13h15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Cities"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Cities
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

