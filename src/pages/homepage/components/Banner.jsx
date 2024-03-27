// implementation of the banner agian we are using banner majorly in homepage so we have decided to make a component folder for homepage again code reusability

import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="bg-[#282828] mx-4 xs:mx-10 my-2 mt-4 rounded-xl xs:flex justify-between items-center py-7 px-7 border-t-white border-b-white">
      <div className=" text-white text-center">
        <p className="text-xl xs:text-3xl font-medium mb-1">
          Unlock Premium stats
        </p>
        <p className="font-thin text-sm">
          Get up to 10TB of Storage for a limited time
        </p>
      </div>
      <div className="xs:mt-0 mt-2 flex xs:block justify-center">
        {" "}
        <button className="text-black bg-white rounded-full h-10 border px-4 font-medium flex items-center justify-between">
          <AiOutlineThunderbolt className="mr-2" />
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default Banner;
