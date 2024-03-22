import Image from "next/image";
import React from "react";
import Container from "../../template/container";

interface ImobileDownload {}

const MobileDownload: React.FC<ImobileDownload> = () => {
  return (
    <Container>
      <div className=" py-18 px-4 sm:px-6 lg:px-8 my-[5em] ">
      <div className="rounded-2xl bg-[#2E2E2E] grid grid-rows-1 overflow-hidden sm:h-[474px] pt-[2em]">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
          <div className="flex justify-center items-end px-10 sm:px-10 mt-auto mb-10 sm:mb-0 sm:h-full">
            <div className="relative w-full h-56 md:w-[390px] md:h-[500px] sm:h-full sm:w-auto ">
              <Image
                src={"/assets/mobile-app.svg"}
                layout="fill"
                objectFit="contain"
                alt="mobile-app"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start text-white  px-10 py-8   ">
            <div className="w-full md:w-auto ">
              <h3 className="font-bold text-2xl sm:text-4xl leading-snug mb-4">
                Access Loggworks <br /> on your mobile phone
              </h3>
              <p className="text-base sm:text-lg text-[#DFDFDF] mb-6 ">
                Enjoy the full experience of Loggworks on our mobile app. What
                more? You get to enjoy all of our services conveniently.
              </p>
            </div>
            <button className="bg-white w-full md:w-[30%] text-black font-bold py-3 px-7 rounded opacity-70">
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default MobileDownload;
