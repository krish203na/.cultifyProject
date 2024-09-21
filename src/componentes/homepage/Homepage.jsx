import React from "react";
import HeroAction from "./HeroAction";
import ImgSection from "./ImgSection";
import CardGridTestimonial from "./CardGridTestimonial";
import CardGridContentList from "./CardGridContentList";
import CardGridImage from "./CardGridImage";

const Homepage = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <HeroAction />
      <ImgSection />
      <CardGridTestimonial />
      <CardGridContentList />
      <CardGridImage />
    </div>
  );
};

export default Homepage;
