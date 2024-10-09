import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import Created from "../assets/Diego.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src= {Created} // Cambia esto con tu logo
                alt="MyTinerary Logo"
                className="h-8 me-3"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MyTinerary
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="/" className="hover:underline">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cities" className="hover:underline">
                    Cities
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/diego18040/-mytinerary-DiegoLopez"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/dieg00zl/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 MyTinerary -{" "}
            <a href="https://github.com/diego18040/-mytinerary-DiegoLopez" className="hover:underline">
              Diego Lopez
            </a>{" "}
            - All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaWhatsapp className="w-5 h-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="https://www.instagram.com/dieg00zl/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="dieg00.lopez00@hotmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaEnvelope className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
