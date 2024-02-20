import Carousel from "@/components/Carousel";
import Slider from "@/components/Slider";
import React from "react";

const page = () => {
  return (
    <>
      <Carousel />
      <div>
        <p className="text-gray-600 text-[30px]">FEATURED THEMES</p>
        <Slider />
      </div>
    </>
  );
};

export default page;
