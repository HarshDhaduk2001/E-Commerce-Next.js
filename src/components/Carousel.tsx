"use client";
import React, { useEffect, useState } from "react";

const images = [
  "https://www.redwolf.in/image/cache/catalog/sliders/oversized-tees-slider-1920-1920x450.jpg?m=1699517851",
  "https://www.redwolf.in/image/cache/catalog/sliders/redwolf-end-of-season-sale-jan-2024-slider-1920-1920x450.jpg?m=1706779418",
  "https://www.redwolf.in/image/cache/catalog/sliders/Drop-cut-new-slider-1920-1920x450.jpg?m=1702356582",
  "https://www.redwolf.in/image/cache/catalog/sliders/hoodies-slider-1920-1920x450.jpg?m=1699335455",
  "https://www.redwolf.in/image/cache/catalog/sliders/oversized-tees-slider-1920-1920x450.jpg?m=1699517851",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`w-full h-[500px] object-fit transition-opacity ${
            index === currentIndex ? "block" : "hidden"
          }`}
        />
      ))}
      <div className="flex items-center justify-center h-10">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 bg-gray-500 rounded-full ${
              index === currentIndex ? "!bg-primary" : "bg-gray-500"
            }`}
          >
            &nbsp;
          </span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
