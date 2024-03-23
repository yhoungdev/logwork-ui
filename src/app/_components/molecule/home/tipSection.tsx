import React from "react";
import TipsCardPanel from "../../shared/tipCardPanel";
import Button from "../../atom/button";
import { BlogPosts } from "@/app/utils/data";

const TipSection = () => {
  return (
    <div className="container my-[5em]">
      <div className="grid grid-cols-3 gap-4">
        {BlogPosts.map((_, key) => (
          <TipsCardPanel data={_} key={key} />
        ))}
      </div>

      <center>
        <div className="my-[3em]">
          <Button className="!px-10">Checkout Our Blog</Button>
        </div>
      </center>
    </div>
  );
};

export default TipSection;
