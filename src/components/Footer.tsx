import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col items-center justify-center py-8 text-white gap-10">
      <p>
        Our site uses secure payment gateways. All major credit & debit cards
        accepted.
      </p>
      <div className="flex justify-around items-center gap-20">
        <div className="gap-5 w-[20rem] flex items-center justify-center">
          <LocalShippingOutlinedIcon className="text-gray-500 text-[3rem]" />
          <span>FREE SHIPPING ON ALL PREPAID ORDERS OVER Rs. 499</span>
        </div>
        <div className="gap-5 w-[20rem] flex items-center justify-center">
          <CurrencyRupeeOutlinedIcon className="text-gray-500 text-[3rem]" />
          <span>CASH ON DELIVERY AVAILABLE TO MOST PARTS OF INDIA</span>
        </div>
        <div className="gap-5 w-[20rem] flex items-center justify-center">
          <TaskOutlinedIcon className="text-gray-500 text-[3rem]" />
          <span>EASY 15 DAY RETURN POLICY</span>
        </div>
      </div>
      <p>Copyright &#169; 2024, Designed by HD</p>
    </footer>
  );
};

export default Footer;
