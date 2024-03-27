// implementation of the cards by using .map function for traversing all the cards we have in data 

import React from "react";
// code reusability by fetching data from a single file
import { cardsData } from "../../../utils/data/Data";

const Cards = () => {
  return (
    <div className="sm:flex justify-evenly mx-3 xs:mx-8  w-auto mt-4">
    {/* .map function is used to traverse all the data present in the cardsData array */}
      {cardsData.map((card) => (
        <div className="sm:w-1/4  my-2 sm:my-0 mx-2 sm:mx-3">
          <div className="bg-white rounded-2xl border-2 h-auto w-auto py-4 pl-4">
            <div>
              <p className="text-gray-400">{card.title}</p>
              <p className="text-lg sm:text-xl font-semibold">{card.number}</p>
            </div>
            <div className="flex mt-8 items-center">
              {card.id == 2 ? (
                <p className="mr-3 text-red-500 bg-red-100 px-3 py-1  text-xs lg:text-sm rounded-full">
                  {card.stats}
                </p>
              ) : (
                <p className="mr-3 text-green-500 bg-green-100 px-3 py-1 text-xs lg:text-sm rounded-full">
                  {card.stats}
                </p>
              )}
              <p className="text-gray-400 text-xs lg:text-sm mr-3">
                From {card.pastStats}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
