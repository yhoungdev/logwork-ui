import Image from "next/image";
import React from "react";

const TipsCardPanel = ({
  data,
}: {
  data: {
    title?: string;
    imgSrc?: string;
  };
}) => {
  return (
    <div className="col-span-1 bg-white rounded-lg max-w-full lg:max-w-[400px] w-full [&:hover_.art]:scale-[1.7]">
      <div
        className="bg-black w-full h-[150px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${data.imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="py-2">
        <p className="text-xs text-gray-500">How To</p>
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <p className="text-sm text-gray-700 mt-1">
          Loggworks helps you get special offers, connect you to top vetted and
          reliable service professional...
        </p>
        <div className="flex flex-col gap-[8px] items-start justify-between mt-[8px] w-full  text-left">
          <button className="text-black text-[16px] hover:text-black hover:opacity-[0.7] transition-opacity py-1">
            Read More →
          </button>
          <span className="text-xs text-gray-500 py-1">18th Jun, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default TipsCardPanel;
