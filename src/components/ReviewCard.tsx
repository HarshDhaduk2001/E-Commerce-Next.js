import Link from "next/link";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 mx-5 px-20 py-10 bg-gray-200 gap-5 w-[70%]">
      <p className="text-2xl">REVIEWS</p>
      <div className="flex flex-col items-start justify-start gap-5 mt-5">
        <p>There are no reviews for this product.</p>
        <p className="text-xl">WRITE A REVIEW</p>
        <p className="text-xs">
          Please
          <Link href={"/login"} className="text-defaultRed">
            &nbsp;login&nbsp;
          </Link>
          or
          <Link href={"/register"} className="text-defaultRed">
            &nbsp;register&nbsp;
          </Link>
          to review
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
