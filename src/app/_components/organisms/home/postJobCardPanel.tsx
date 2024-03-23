import React from "react";
import Button from "../../atom/button";
import Image from "next/image";
import Container from "../../template/container";

const PostJobSection = () => {
  return (
    <Container>
      <div className=" my-[5em] mx-auto ">
        <div className="flex flex-col gap-[3em] md:flex-row-reverse items-center bg-white  rounded-lg overflow-hidden">
          <div className="md:w-1/2  h-[400px] md:h-[550px] overflow-hidden rounded-lg flex items-center">
            <Image
              className="w-full rounded-lg bg-slate-400"
              alt="service"
              width={609}
              height={522}
              src={"/assets/professional.svg"}
            />
          </div>
          <div className="md:w-[500px] p-4">
            <h3 className="text-2xl md:text-4xl font-bold md:leading-[48px] mb-[18px]">
              Can’t find the <br /> professional you are looking for?
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 !mb-[32px]">
              All your payments are protected by a highly secure Escrow account.
              Pay in advance or on completion. with just a few clicks of a
              button, whenever.
            </p>
            <Button className="w-full md:w-[35%] ">Join as Pro</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostJobSection;
