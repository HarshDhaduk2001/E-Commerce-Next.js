import Carousel from "@/components/Carousel";
import FeaturedCard from "@/components/FeaturedCard";
import React from "react";

const page = () => {
  return (
    <>
      <Carousel />
      <div className="px-20 my-20">
        <p className="text-gray-600 text-[30px] font-bold">FEATURED THEMES</p>
        <FeaturedCard />
      </div>
      <div className="flex flex-col items-center justify-center my-20 mx-20 px-20 py-10 bg-gray-200 gap-5">
        <p className="text-2xl">COOL T-SHIRTS & DESIGNER MERCH ONLINE</p>

        <p>
          Redwolf is an indie clothing label that brings you the most amazing
          t-shirts and accessories online inspired by everything pop culture!
          Redwolf offers a wide range of products from cool t shirts and
          sweatshirts to accessories like badges, posters, laptop skins and
          fridge magnets. A t-shirt is a perfect canvas to showcase your
          creativity, passion and personality. At Redwolf, we work with some of
          the best designers and illustrators from all around the globe to offer
          you a fresh and unique selection of designer t-shirts.
        </p>

        <p>
          If you’re looking for a t-shirt to help you express yourself and the
          things you love, we have you covered. Check out our collection of cool
          t shirts online in India. From funny t-shirts with epic parodies and
          hilarious one liners to intricate graphic designs inspired by your
          favourite movie and TV show characters. We have something for
          everyone! Our collection of online t shirts are screen printed to
          perfection on 100% cotton Redwolf tshirts. We provide cash on delivery
          and free shipping all over India with a hassle free return policy to
          make sure you have a pleasant online shopping experience.
        </p>

        <p>
          All artwork posted on this website is intended as fan art and is not
          purported to be official merchandise unless indicated otherwise. If
          you have any issues regarding the artwork, do write in to us at
          contact@redwolf.in
        </p>
      </div>
    </>
  );
};

export default page;
