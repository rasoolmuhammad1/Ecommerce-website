import React from "react";
import { BiHeart, BiSearch, BiShoppingBag } from "react-icons/bi";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import logo from "@/img/logo.png";
import toplogo from "@/img/topheaderlogo.png";
import Image from "next/image";
import Link from "next/link"
const Header = () => {
  return ( 
    <>
      <div className="w-full p-2 text-center text-[14px] text-black bg-[#F5F5F5] max-w-[1440px]">
        <div className="flex flex-col md:flex-row lg:items-center lg:justify-center lg:gap-32 w-full">
          <div className="flex justify-evenly lg:justify-between w-full ">
            <div className="lg:ml-24">
              <Image src={toplogo} alt="top logo" />
            </div>
            <p className="text-left">Skip to main content</p>
          </div>
          <div className="flex gap-5 w-full lg:w-[50%] justify-center">
            <p className="flex items-center border-r-[1px] text-[11px] font-medium pr-4 border-black h-[14px]">
              Find a Store
            </p>
            <p className="flex items-center border-r-[1px] text-[11px] font-medium pr-4 border-black h-[14px]">
              Help
            </p>
            <Link href={"/Join"}>
            <p className="flex items-center border-r-[1px] text-[11px] font-medium pr-4 border-black h-[14px]">
              Join Us
            </p>
            </Link>
            <Link href={"/Singin"}>
            <p className="flex items-center border-r-[1px] text-[11px] font-medium pr-4 border-black h-[14px]">
              Sign In
            </p>
            </Link>
          </div>
        </div>
      </div>
      <header className="w-full  pt-[10px] pb-[10px]  max-w-[1440px]">
        <div className="flex justify-around items-center  lg:gap-10 2xl:gap-36">
          <nav className=" flex justify-between items-center  md:w-[50%] lg:gap-10 2xl:gap-28">
            <div className="font-bold text-[24px] max-sm:hidden ">
              <Link href={"/"}>
              <Image src={logo} alt="logo" />
              </Link>
            </div>
            <ul className=" flex justify-center items-center text-[16px] 2xl:gap-9 lg:gap-5 max-md:hidden max-lg:hidden">
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                New Featured
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                Men
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                Women
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                Kids
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                Sale
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                SNKRS
              </li>
            </ul>
          </nav>

          <Sheet>
            <SheetTrigger className=" lg:hidden ">
              <IoIosMenu size={20} />
            </SheetTrigger>
            <SheetContent>
              <ul className="bg-white flex justify-center items-center text-[16px]  gap-9 flex-col">
                <Link href={"/"}>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  New Featured
                </li>
                </Link>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  Men
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  Women
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  Kids
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  Sale
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  SNKRS
                </li>
              </ul>
            </SheetContent>
          </Sheet>
          <nav className=" flex justify-center items-center 2xl:gap-6 lg:gap-4">
            <div className="flex justify-center items-center rounded-r-[300px]">
              <span className="cursor-pointer bg-[#F5F5F5] pr-0 py-2 px-3 rounded-l-[50%] ">
                <BiSearch size={20} />
              </span>
              <input
                placeholder="What you are looking for?"
                className="bg-[#F5F5F5] px-3 py-2 pl-0  placeholder:text-[14px] rounded-r-[300px]"
              />
            </div>
            <BiHeart size={24} className="cursor-pointer" />
            <Link href={"/Cart"}>
            <BiShoppingBag size={24} className="cursor-pointer" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
