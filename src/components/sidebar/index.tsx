'use client';
import React from 'react';
import Image from 'next/image';
import SideLinks from './SideLinks';
import logo from '@/assets/logo.webp';

const Sidebar = () => {
  return (
    <div className="w-[clamp(4rem,22vw,18rem)] h-screen sticky top-0 text-slate-400 bg-[#1C1A22] py-8">
      <div className="flex items-center justify-center gap-3 px-4">
        <Image
          src={logo}
          width={50}
          height={50}
          alt="logo"
          className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]  object-contain"
        />
        <div className="font-bold lg:text-xl xl:text-2xl hidden md:block">
          Rajat <br /> Raghuvanshi
        </div>
      </div>
      <div className="hidden md:block my-6 px-4">
        <hr />
        <div className="text-center my-1">Software developer</div>
        <hr />
      </div>
      <SideLinks />
    </div>
  );
};

export default Sidebar;
