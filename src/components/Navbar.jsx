// this is a navbar component which is a global component so we make of code reusability

import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import company from "../assets/images/company.png";

const NavBar = () => {
  return (
    // starting point of Navbar with nav tag based on the size of screen we have showcase different views
    <nav class="px-6 py-3 items-center bg-white">
      <div className=" visible xs:hidden flex items-center justify-between">
        <img src={company} className="h-5 my-4 mx-2" />
        <CgProfile size="32px" color="black" />
      </div>
      {/* Search Bar */}
      <div class="xs:flex w-full justify-between">
        <div class="flex items-center border w-full mr-10 rounded-lg px-2 py-1 lg:py-2 xl:py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 pt-0.5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            class="ml-2 outline-none bg-transparent"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        {/* the list of icons after/following search bar */}
        <ul class="xs:flex items-center space-x-6 hidden xs:visible">
          <li>
            <IoMdNotificationsOutline size="24px" color="grey" />
          </li>
          <li>
            <CiCalendar size="24px" color="grey" />
          </li>
          <li>
            <RxDashboard size="22px" color="grey" />
          </li>
          <li>
            <CgProfile size="24px" color="grey" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
