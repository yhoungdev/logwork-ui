import React from "react";
import { Cities } from "@/app/utils/data";

interface IareaProfessionals {}

const AreaProfessionals: React.FC<IareaProfessionals> = () => {
  return (
    <div className="container flex flex-col px-4 sm:px-6 lg:px-8 my-[6em] md:my-[9em]">
      <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
        View Home service professionals in your area.
      </h3>
      <div
        className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 pb-5 mt-12 gap-6
        "
      >
        {Cities.map((city, key) => (
          <p key={key} className="text-black">
            {city}
          </p>
        ))}
      </div>

      <div className="block md:hidden ">
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 pb-5 mt-12 gap-6">
          {Cities.splice(0, 10).map((city, key) => (
            <p key={key} className="text-black">
              {city}
            </p>
          ))}
        </div>
      </div>
      <div className="flex md:hidden justify-center mt-5">
        <button className=" text-accent border-[1.5px] border-accent rounded-md py-3 w-[80%] ">
          View all Locations
        </button>
      </div>
    </div>
  );
};

export default AreaProfessionals;
