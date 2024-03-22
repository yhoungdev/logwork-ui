"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import Container from "../../template/container";

interface IreviewsSLider {}

const reviews = [
  {
    text: "Using Loggworks made finding home services a breeze; posting jobs for free saved me money and hassle.",
    author: "George Harrison",
  },
  {
    text: "The variety of professionals on Loggworks is impressive. Found a great landscaper who did wonders for my yard!",
    author: "Samantha Bloom",
  },
  {
    text: "Loggworks' customer service is top-notch. They helped me resolve an issue with a contractor in less than a day.",
    author: "Derek Shaw",
  },
  {
    text: "I appreciate the user-friendly interface of Loggworks. It makes navigating and posting jobs really simple.",
    author: "Alisha Reed",
  },
  {
    text: "As a professional, Loggworks has connected me with clients I wouldn't have found otherwise. It's a game-changer.",
    author: "Carlos Gutierrez",
  },
];

const ReviewsSlider: React.FC<IreviewsSLider> = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [canGoForward, setCanGoForward] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setCanGoBack(true);
      if (newIndex === reviews.length - 1) {
        setCanGoForward(false);
      }
      return newIndex;
    });
  };

  const previousReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setCanGoForward(true);
      if (newIndex === 0) {
        setCanGoBack(false);
      }
      return newIndex;
    });
  };

  return (
    <div className="">
      <Container>
        <h3 className="font-bold  text-[20px] md:text-[32px]">
          We’re trusted by many across the UK
        </h3>
      </Container>

      <div className="bg-accent/10 block container py-[3em] md:py-[1em]  md:h-[466px]  w-full  mt-[48px] mb-[80px] rounded-lg px-[1em] md:px-[81px]">
        <div className="w-full flex flex-col h-full md:grid md:grid-cols-6">
          <div className=" hidden md:grid place-items-center col-span-1">
            <span
              className={`grid place-items-center bg-white text-black rounded-full h-[56px] w-[56px] ${
                !canGoBack && "opacity-50"
              }`}
              onClick={canGoBack ? previousReview : undefined}
            >
              <FaChevronLeft />
            </span>
          </div>

          <div
            className="
               
               py-[2em]
              bg-white
              md:bg-transparent
              flex flex-col 
              items-center
             justify-center text-center col-span-4 px-4 gap-[32px]"
          >
            <div className="my-4">
              <p className="opacity-[0.7]">
                "{reviews[currentReviewIndex].text}"
              </p>
              <b>{reviews[currentReviewIndex].author}</b>
            </div>

            <div className="hidden md:flex gap-[12px] translate-y-[6px]">
              {reviews.map((review, index) => (
                <span
                  key={index}
                  className={`${
                    index === currentReviewIndex
                      ? "bg-accent w-[30px]"
                      : "w-[6px] bg-accent/20"
                  } rounded-full h-[6px] transition-all`}
                ></span>
              ))}
            </div>
          </div>
          <div className="hidden md:grid place-items-center col-span-1">
            <span
              className={`grid place-items-center bg-accent text-white rounded-full h-[56px] w-[56px] ${
                !canGoForward && "opacity-50"
              }`}
              onClick={canGoForward ? nextReview : undefined}
            >
              <FaChevronRight />
            </span>
          </div>

          <div className="flex justify-center md:hidden my-[1.4em] gap-[12px] translate-y-[6px]">
            {reviews.map((review, index) => (
              <span
                key={index}
                className={`${
                  index === currentReviewIndex
                    ? "bg-accent w-[30px]"
                    : "w-[6px] bg-accent/20"
                } rounded-full h-[6px] transition-all`}
              ></span>
            ))}
          </div>

          <div className="flex md:hidden justify-between">
            <div className=" grid place-items-center col-span-1">
              <span
                className={`grid place-items-center bg-white text-black rounded-full h-[56px] w-[56px] ${
                  !canGoBack && "opacity-50"
                }`}
                onClick={canGoBack ? previousReview : undefined}
              >
                <FaChevronLeft />
              </span>
            </div>

            <div className="grid place-items-center col-span-1">
              <span
                className={`grid place-items-center bg-accent text-white rounded-full h-[56px] w-[56px] ${
                  !canGoForward && "opacity-50"
                }`}
                onClick={canGoForward ? nextReview : undefined}
              >
                <FaChevronRight />
              </span>
            </div>
          </div>

          <div className="my-5">
            <div
              className="w-full h-[100px] md:hidden "
              style={{
                backgroundImage: "url(assets/trustScore.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
