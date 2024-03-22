import React from "react";
import TipsCardPanel from "../../shared/tipCardPanel";
import Button from "../../atom/button";
import { BlogPosts } from "@/app/utils/data";
import Container from "../../template/container";

const TipSection = () => {
  return (
    <Container>
      <div className="  md:my-[9em]">
        <div className="flex flex-nowrap justify-between gap-4 overflow-x-auto md:overflow-hidden">
          {BlogPosts.map((post, key) => (
            <div key={key} className=" min-w-full md:min-w-0">
              <TipsCardPanel data={post} />
            </div>
          ))}
        </div>

        <center>
          <div className="my-[3em]">
            <Button className="!px-10">Checkout Our Blog</Button>
          </div>
        </center>
      </div>
    </Container>
  );
};

export default TipSection;
