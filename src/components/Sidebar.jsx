// this is the sidebar component again this is stored in global component for code reusability

import React from "react";
import company from "../assets/images/company.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";
import { AiTwotoneAppstore } from "react-icons/ai";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";

const Sidebar = () => {
  return (
    // a Parent Div which contains Majorly 2 Child div
    <div class="flex flex-col top-0 left-0 sm:w-64 w-0 bg-white border-r border-b collapse sm:visible">
      <div class="items-start justify-center mt-6 mb-8 ml-2">
        <img src={company} alt="Company Logo" className="h-6 ml-3" />
      </div>
      {/* Global Dashboard options  */}
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm  tracking-wider text-gray-500 font-medium">
                DASHBOARD
              </div>
            </div>
          </li>
          {/* sub child started  */}
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <div className="flex w-full justify-between">
                <span class="ml-2 text-sm tracking-wide truncate font-semibold">
                  Dashboard
                </span>
                <IoIosArrowDown />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </span>
              <div className="flex w-full justify-between">
                <span class="ml-2 text-sm tracking-wide truncate font-semibold">
                  Messages
                </span>
                <IoIosArrowDown />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </span>
              <div className="flex w-full justify-between">
                <span class="ml-2 text-sm tracking-wide truncate font-semibold">
                  Friends
                </span>
                <IoIosArrowDown />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <AiTwotoneAppstore />
              </span>
              <div className="flex w-full justify-between">
                <span class="ml-2 text-sm tracking-wide truncate font-semibold">
                  Apps
                </span>
                <IoIosArrowDown />
              </div>
            </a>
          </li>
          {/* Component number 2 in sidebar */}
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-medium tracking-wider text-gray-500">
                PAGES
              </div>
            </div>
          </li>
          {/* starting of another child  */}
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
              </span>
              <div className="flex w-full justify-between">
                <span class="ml-2 text-sm tracking-wide truncate font-semibold">
                  Help Center
                </span>
                <IoIosArrowDown />
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4 mr-1">
                <FaRegFolder />
              </span>
              <div className="flex w-full justify-between">
                <span class="ml-2 text-sm tracking-wide truncate font-semibold">
                  File Manager
                </span>
                <IoIosArrowDown />
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* extra div for logout and setting stuff  */}
      <div className="items-baseline border-t p-2 px-6 flex justify-between">
        <PiSlidersHorizontalDuotone size={24} />
        <FiLogOut size={22} />
        <AiOutlineGlobal size={22} />
      </div>
    </div>
  );
};

export default Sidebar;
