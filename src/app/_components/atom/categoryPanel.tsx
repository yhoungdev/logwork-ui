import Image from "next/image";
import React from "react";

const CategoryPanel = ({
  data,
  assetRepo,
}: {
  data: {
    imgSrc: string;
    title: string;
  };
  assetRepo: string;
}) => {
  return (
    <div className="bg-white  rounded-lg max-w-full lg:max-w-[400px] w-full [&:hover_.art]:scale-[1.5]">
      <div
        className="bg-black w-full h-[150px]
       rounded-lg overflow-clip flex items-center
       "
        style={{
          backgroundImage: `url(/assets/serviceCategories/${assetRepo + data.imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="py-2">
        <h2
          className=" text-sm  md:text-lg
           font-medium text-default_text"
        >
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default CategoryPanel;
