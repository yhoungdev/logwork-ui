import React from "react";
import CategoryPanel from "../../atom/categoryPanel";
import { ServiceCategories } from "@/app/utils/data";
import Container from "../../template/container";

const ExploreCategories = () => {
  return (
    <Container>
      <div className=" my-[5em]">
      <h1 className="text-lg md:text-3xl font-bold my-[.5em] mb-[48px]">
        Explore service by categories
      </h1>


      <div className="pb-[66px]">
        <h1 className="pb-3 text-[19px] font-bold">Trades Men</h1>
      
        <div className="flex gap-4 overflow-x-auto pl-4 -mr-8 md:justify-between">
          {ServiceCategories.tradesMen.map((_, key) => (
            <div className="flex-shrink-0 min-w-[calc(50%-1rem)] md:min-w-0" key={key}>
              <CategoryPanel data={_} assetRepo="tradesMen/" />
            </div>
          ))}
        </div>
      </div>

   
      <div className="pb-3">
        <h1 className="pb-3 text-[19px] font-bold">Cleaning</h1>
       
        <div className="flex gap-4 overflow-x-auto pl-4 -mr-8 md:justify-between">
          {ServiceCategories.cleaning.map((_, key) => (
            <div className="flex-shrink-0 min-w-[calc(50%-1rem)] md:min-w-0" key={key}>
              <CategoryPanel data={_} assetRepo="cleaning/" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Container>
  );
};

export default ExploreCategories;
