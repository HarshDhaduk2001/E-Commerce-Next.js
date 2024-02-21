"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="flex items-center justify-around !h-16 text-[12px]">
      <img
        src="https://www.redwolf.in/image/cache/catalog/featured_brands/Superman-1-165x90.png?m=1706184531"
        alt="logo"
        className="h-16"
      />
      <span></span>
      {/* <div className="flex items-center justify-center rounded-lg border border-primary py-[6px] px-4 w-[30vw]">
        <SearchIcon className="text-gray-500 w-4" />
        <input
          type="text"
          className="ml-2 text-gray-500 outline-none text-sm w-[25vw]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <div className="flex items-center justify-center gap-10 cursor-pointer">
        <span className="flex flex-col items-center justify-center text-gray-500">
          <AccountCircleOutlinedIcon />
          <span>Profile</span>
        </span>
        <span className="flex flex-col items-center justify-center text-gray-500">
          <FavoriteBorderOutlinedIcon />
          <span>Wishlist</span>
        </span>
        <span className="flex flex-col items-center justify-center text-gray-500">
          <ShoppingBagOutlinedIcon />
          <span>Bag</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
