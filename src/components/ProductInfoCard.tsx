import React from "react";

const ProductInfoCard = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 mx-5 px-20 py-10 bg-gray-200 gap-5 w-[70%]">
      <p className="text-2xl">PRODUCT INFORMATION</p>
      <div className="flex flex-col items-center justify-center w-full text-sm gap-1">
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            FABRIC
          </span>
          <span className="w-[80%] flex items-start">
            300 GSM Brushed Fleece
          </span>
        </div>
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            COLOUR
          </span>
          <span className="w-[80%] flex items-start">Lavender</span>
        </div>
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            STYLE
          </span>
          <span className="w-[80%] flex items-start">
            Please refer to the size chart
          </span>
        </div>
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            SIZE
          </span>
          <span className="w-[80%] flex items-start">
            Premium double stitched hoodie with kangaroo pockets, drawstrings
            and a two layered hooded liner.
          </span>
        </div>
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            MANUFACTURED, PACKED AND SOLD BY
          </span>
          <span className="w-[80%] flex items-start">
            Red Wolf Apparel LLP 15, Patel Industrial Estate, Building no. 2,
            Gauraipada, Vasai east, Maharashtra 401208, India Contact:
            orders@redwolf.in
          </span>
        </div>
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            COUNTRY OF ORIGIN
          </span>
          <span className="w-[80%] flex items-start">India</span>
        </div>
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            SIZES
          </span>
          <span className="w-[80%] flex items-start text-defaultRed cursor-pointer">
            Check out our Size Chart
          </span>
        </div>
        <div className="flex items-start justify-center w-[100%] gap-5">
          <span className="w-[50%] flex font-bold items-center justify-end">
            CARE
          </span>
          <span className="w-[80%] flex items-start text-defaultRed cursor-pointer">
            Check out our Washing instructions
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
