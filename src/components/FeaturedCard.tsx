import Link from "next/link";
import React from "react";

const images = [
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-anime-300x300.jpg?m=1706184531",
    name: "anime",
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-superhero-300x300.jpg?m=1706184531",
    name: "superhero",
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-cartoon-300x300.jpg?m=1706184531",
    name: "cartoon",
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-slogan-300x300.jpg?m=1706184531",
    name: "slogan",
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-funny-300x300.jpg?m=1706184531",
    name: "funny",
  },
  {
    image:
      "https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-geek-300x300.jpg?m=1706184531",
    name: "geek",
  },
  {
    image:
      "	https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-funky-300x300.jpg?m=1706184531",
    name: "funkey",
  },
];

const FeaturedCard = () => {
  return (
    <div className="flex items-center justify-around my-5">
      {images.map((i: any) => (
        <Link
          className="flex flex-col items-center justify-center gap-4"
          href={`${i.name}`}
        >
          <img src={i.image} className="w-44 h-44 rounded-full" />
          <span className="font-xl text-gray-500 uppercase">{i.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedCard;
