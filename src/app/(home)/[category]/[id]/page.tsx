"use client";
import ProductInfoCard from "@/components/ProductInfoCard";
import ReviewCard from "@/components/ReviewCard";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ProductCard from "@/components/ProductCard";

const sizeChart = [
  { size: "xs", inStock: true },
  { size: "s", inStock: true },
  { size: "m", inStock: true },
  { size: "l", inStock: true },
  { size: "xl", inStock: true },
  { size: "2xl", inStock: true },
  { size: "3xl", inStock: false },
];

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
];

const sideImages = [
  "https://www.redwolf.in/image/cache/catalog/hoodies/redwolf-basics-lavender-hoodie-india-600x800.jpg?m=1705401188",
  "https://www.redwolf.in/image/cache/catalog/hoodies/redwolf-basics-lavender-hoodie-india-back-600x800.jpg?m=1705310742",
  "https://www.redwolf.in/image/cache/catalog/hoodies/redwolf-basics-lavender-hoodie-india-600x800.jpg?m=1705401188",
  "https://www.redwolf.in/image/cache/catalog/hoodies/redwolf-basics-lavender-hoodie-india-back-600x800.jpg?m=1705310742",
];

const page = () => {
  const route: any = usePathname();
  console.log(route.slice(1));

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [favourit, setFavourit] = useState(false);
  const [mainImage, setMainImage] = useState(
    "https://www.redwolf.in/image/cache/catalog/hoodies/redwolf-basics-lavender-hoodie-india-600x800.jpg?m=1705401188"
  );

  return (
    <div className="px-20">
      <p className="text-[1.5rem] my-2 border-b-2">
        REDWOLF BASICS: LAVENDER - HOODIE
      </p>
      <div className="flex items-start justify-center gap-5">
        <img src={mainImage} alt="" className="w-[30%] h-[30%] object-cover" />
        <div className="flex flex-col items-center justify-center gap-2.5">
          {sideImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`w-[8rem] h-[8rem] cursor-pointer rounded-lg ${
                image === mainImage && "border-4 border-black"
              }`}
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
        <div className="flex flex-col items-start justify-center w-[40%] mx-28">
          <p className="text-[2rem] font-bold">REDWOLF PREMIUM HOODIE</p>
          <p className="text-gray-500 text-sm mt-3 mb-5">
            This is a plain premium Redwolf branded brushed fleece hoodie
            featuring kangaroo pockets, drawstrings and a hood.
          </p>
          <div className="flex items-center justify-between w-full">
            <p className="flex items-center justify-center gap-2">
              <span className="font-bold text-2xl">Rs. 999.00</span>
              <span className="text-gray-500 line-through">Rs. 1,999.00</span>
              <span className="text-defaultRed font-bold text-xl ml-5">
                50% off!
              </span>
            </p>
            <button className="cursor-pointer">
              <span onClick={() => setFavourit(!favourit)}>
                {favourit ? (
                  <FavoriteOutlinedIcon className="text-defaultRed text-4xl" />
                ) : (
                  <FavoriteBorderOutlinedIcon className="text-gray-500 text-4xl" />
                )}
              </span>
            </button>
          </div>
          <p>(Incl. of GST)</p>
          <p className="text-xl mt-10 mb-2">CLICK TO SELECT SIZE:</p>
          <div className="flex items-center justify-center gap-1">
            {sizeChart.map((i: any) => (
              <span
                className={`w-4 h-4 p-5 flex items-center justify-center bg-gray-100 border border-gray-500 rounded-lg font-bold font-xl uppercase ${
                  !i.inStock
                    ? "text-gray-500 cursor-not-allowed"
                    : size === i.size
                    ? "text-defaultRed"
                    : "cursor-pointer text-black"
                }`}
                onClick={() => setSize(i.size)}
              >
                {i.size}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center my-10 gap-3">
            <span className="font-semibold mr-3">Quantity :</span>
            <span
              className={`px-3 py-1 bg-gray-100 border border-gray-500 rounded-lg ${
                quantity <= 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              -
            </span>
            <span className="flex items-center justify-center w-[20px]">
              {quantity}
            </span>
            <span
              className={`px-3 py-1 bg-gray-100 border border-gray-500 rounded-lg ${
                quantity > 10 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={() => quantity < 10 && setQuantity(quantity + 1)}
            >
              +
            </span>
          </div>
          <button className="bg-defaultRed w-full cursor-pointer text-white py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex items-start justify-center w-[100%]">
        <ProductInfoCard />
        <ReviewCard />
      </div>
      <div className="mb-20">
        <p className="text-gray-600 text-[30px] font-bold mb-10">
          RELATED PRODUCTS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {images.map((i: any) => (
            <ProductCard
              route={route.slice(1).split("/")[0]}
              id={i.id}
              image={i.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
