import { FaCheckSquare, FaPlus, FaRegCheckSquare } from "react-icons/fa";
import { IoIosPin, IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Button from "../atom/button";
import Container from "../template/container";
interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <div
      className="  py-[9em]  text-center md:text-left md:h-[80vh] w-full flex flex-col md:flex-col relative"
      style={{
        background: ` #F9F8FB`,
      }}
    >
      <Image
        alt="hero image"
        width={400}
        height={500}
        src="/assets/hero-bg.svg"
        className="absolute
         top-0 right-0 h-[100%]
         hidden md:block
         object-cover object-right  w-[50%]"
      />
      <div className="grid  md:grid-cols-3 container w-full relativ z-[3] ">
        <div className=" hidden col-span-2 w-full h-full   md:flex flex-col items-center justify-center  ">
          <h1 className=" text-2xl md:text-[52px] font-bold md:leading-[64px] ">
            Find reliable home service providers near you
          </h1>

          <p className="md:hidden text-default_text">
            Loggworks connect homeowners to genuine and reliable service
            providers who provide easy-to-book and hassle-free services.
          </p>
          <div className="hidden md:flex gap-3 flex-wrap w-[100%] py-4">
            <span className="flex  items-center gap-3 whitespace-nowrap">
              <FaRegCheckSquare className="text-accent" />
              <span className="">100% cost-free job postings</span>
            </span>
            <span className="flex items-center gap-3 whitespace-nowrap">
              <FaRegCheckSquare className="text-accent" />
              Get Multiple Quotes, Free of Charge
            </span>
            <span className="flex items-center gap-3 whitespace-nowrap">
              <FaRegCheckSquare className="text-accent" />
              Payment and Privacy Protection
            </span>
            <span className="flex items-center gap-3 whitespace-nowrap">
              <FaRegCheckSquare className="text-accent" />
              Vetted and reliable Professionals
            </span>
          </div>

          <div className=" hidden md:flex w-full py-4 gap-3">
            <div className="flex items-center border-2 border-slate-300/20  rounded overflow-hidden p-[20px] h-[48px] bg-white">
              <input
                className="p-2 text-sm text-gray-700 w-[120px]"
                type="text"
                placeholder="Electrician"
              />

              <div className="flex items-center border-l border-slate-400/20 h-auto">
                <div className="p-2">
                  <IoIosPin />
                </div>
                <input
                  className="px-2 text-sm text-gray-700 outline-none w-[140px]"
                  type="text"
                  placeholder="Town/postcode"
                />
                <button className="px-2 text-gray-700">
                  <IoIosSearch size="1.5em" />
                </button>
              </div>
            </div>
            <button className="flex p-0 px-4 gap-2 text-sm rounded text-white items-center justify-center bg-accent">
              <FaPlus />
              Post a job
            </button>
          </div>
        </div>
      </div>

      <Container>
        <div className="block md:hidden">
          <h1 className=" text-2xl md:text-[52px] font-bold md:leading-[64px] ">
            Find reliable home service providers near you
          </h1>

          <p className="md:hidden text-default_text mt-5">
            Loggworks connect homeowners to genuine and reliable service
            providers who provide easy-to-book and hassle-free services.
          </p>

          <div className="my-[2em] md:hidden">
            <Button className="w-[80%] mx-auto flex items-center justify-center gap-3 ">
              <FaPlus />
              <h1>Post a Job</h1>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
