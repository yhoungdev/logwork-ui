import React from "react";
import Header from "../organisms/header";
import Hero from "../organisms/hero";
import Information from "../organisms/home/information";
import Footer from "../organisms/footer";
import PostJobSection from "../organisms/home/postJobCardPanel";
import TipSection from "../molecule/home/tipSection";
import ExploreCategories from "../organisms/home/exploreCategories";
import AreaProfessionals from "../organisms/home/areaProfessionals";
import MobileDownload from "../organisms/home/mobileDownload";
import ReviewsSlider from "../organisms/home/reviewSlider";
import PopularServices from "../organisms/home/popularServices";
import About from "../organisms/home/about";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />

      <About />
      <PopularServices />
      <Information />
      <ExploreCategories />
      <PostJobSection />
      <ReviewsSlider />
      <AreaProfessionals />
      <MobileDownload />
      <TipSection />
      <Footer />
    </div>
  );
};

export default Homepage;
