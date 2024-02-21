"use client";
import ProductCard from "@/components/ProductCard";
import { usePathname } from "next/navigation";
import React from "react";

const images = [
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/hoodies/redwolf-basics-lavender-hoodie-india-600x800.jpg?m=1705401188",
    id: 1,
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/sliders/redwolf-end-of-season-sale-jan-2024-slider-1920-1920x450.jpg?m=1706779418",
    id: 2,
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/sliders/Drop-cut-new-slider-1920-1920x450.jpg?m=1702356582",
    id: 3,
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/sliders/hoodies-slider-1920-1920x450.jpg?m=1699335455",
    id: 4,
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/sliders/oversized-tees-slider-1920-1920x450.jpg?m=1699517851",
    id: 5,
  },
];

const page = () => {
  const route: any = usePathname();
  console.log(route.slice(1));

  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {images.map((i: any) => (
        <ProductCard route={route.slice(1)} id={i.id} image={i.image} />
      ))}
    </div>
  );
};

export default page;
