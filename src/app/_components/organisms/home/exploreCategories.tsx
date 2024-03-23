import React from "react";
import CategoryPanel from "../../atom/categoryPanel";
import { ServiceCategories } from "@/app/utils/data";

const ExploreCategories = () => {
  return (
    <div className="container my-[5em]">
      <h1 className="text-lg md:text-3xl font-bold my-[.5em] mb-[48px]">
        Explore service by categories
      </h1>
      <div className="pb-[66px]">
        <h1 className="pb-3 text-[19px] font-bold">Trades Men</h1>
        <div className="flex gap-4 justify-between">
          {ServiceCategories.tradesMen.map((_, key) => (
            <CategoryPanel data={_} key={key} assetRepo="tradesMen/" />
          ))}
        </div>
      </div>

      <div className="pb-3">
        <h1 className="pb-3 text-[19px] font-bold">Cleaning</h1>
        <div className="flex gap-4 justify-between">
          {ServiceCategories.cleaning.map((_, key) => (
            <CategoryPanel data={_} key={key} assetRepo="cleaning/" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
