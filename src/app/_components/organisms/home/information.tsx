import React from "react";
import Button from "../../atom/button";
import Image from "next/image";
import Container from "../../template/container";

const Information = () => {
  return (
    <Container>
      <div className="flex flex-col gap-[3em] md:flex-row items-center bg-white rounded-lg overflow-hidden">
        <div className="md:w-1/2  h-[400px] md:h-[550px] overflow-hidden  flex justify-center items-center">
          <Image
            className="w-full bg-slate-400 rounded-lg"
            alt="service"
            width={100}
            height={100}
            src={"/assets/service-to-offer.svg"}
          />
        </div>
        <div className="md:w-[500px] md:p-4">
          <h3 className="text-2xl md:text-4xl font-bold md:leading-[48px] mb-[18px]">
            Do you have a <br />
            service to offer?
          </h3>
          <p className="mt-2 !text-[16px] md:text-base text-default_text mb-[32px] !leading-[28px]">
            All your payments are protected by a highly secure Escrow account.
            Pay in advance or on completion, with just a few clicks of a button,
            whenever.
          </p>
          <Button className="w-full md:w-[35%] ">Join as Pro</Button>
        </div>
      </div>
    </Container>
  );
};

export default Information;
