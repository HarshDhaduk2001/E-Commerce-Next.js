import Link from "next/link";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const ProductCard = ({ route, id, image }: any) => {
  const [favourit, setFavourit] = useState(false);

  return (
    <div className="flex flex-col items-start gap-1 w-[300px]">
      <Link href={`/${route}/${id}`} className="cursor-pointer">
        <img src={image} alt="" className="h-[340px] w-[260px]" />
        <p>Redwolf Basics: Lavender - Hoodie</p>
      </Link>
      <p className="text-sm">
        By <span className="text-defaultRed">Redwolf</span>
      </p>
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-400">Rs. 999</p>
          <p className="text-gray-600 line-through">Rs. 1,999</p>
        </div>
        <p className="text-defaultRed">50% off!</p>
      </div>
      <div className="flex items-center justify-between gap-12 mt-2">
        <button className="bg-defaultRed cursor-pointer text-white py-2 px-12 rounded-lg">
          Add to Cart
        </button>
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
    </div>
  );
};

export default ProductCard;
