import React from "react";
import CategoryPanel from "../../atom/categoryPanel";
import { ServiceCategories } from "@/app/utils/data";
import Container from "../../template/container";
import { FiPlus } from "react-icons/fi";

const ExploreCategories = () => {
  return (
    <Container>
      <div className="my-[5em]">
        <h1 className="text-lg md:text-3xl font-bold my-[.5em] mb-[48px]">
          Explore service by categories
        </h1>

        <div className="pb-[66px]">
          <div className="flex items-center justify-between">
            <h1 className="pb-3 text-[19px] font-bold">Trades Men</h1>
            <div className="flex items-center gap-1 font-medium text-sm md:text-md text-accent cursor-pointer">
              <FiPlus />
              <h1>View All</h1>
            </div>
          </div>
          <div className="flex flex-nowrap gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {ServiceCategories.tradesMen.map((category, key) => (
              <div
                key={key}
                className="flex-shrink-0 min-w-[calc(50%-1rem)] md:min-w-full md:w-auto"
              >
                <CategoryPanel data={category} assetRepo="tradesMen/" />
              </div>
            ))}
          </div>
        </div>

        <div className="pb-3">
          <div className="flex items-center justify-between">
            <h1 className="pb-3 text-[19px] font-bold">Cleaning</h1>
            <div className="flex items-center gap-1 font-medium text-sm md:text-md text-accent cursor-pointer">
              <FiPlus />
              <h1>View All</h1>
            </div>
          </div>
          <div className="flex flex-nowrap gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {ServiceCategories.cleaning.map((category, key) => (
              <div
                key={key}
                className="flex-shrink-0 min-w-[calc(50%-1rem)] md:min-w-full md:w-auto"
              >
                <CategoryPanel data={category} assetRepo="cleaning/" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExploreCategories;
