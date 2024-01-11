'use client';
import React from 'react';
import Image from 'next/image';
import SideLinks from './SideLinks';

const Sidebar = () => {
  return (
    <div className="min-w-60 h-screen sticky top-0 text-white bg-[#161617] py-8">
      <div className="flex items-center justify-center gap-3 px-4">
        <Image src={'/logo.png'} width={50} height={50} alt="logo" />
        <div className="font-bold text-2xl ">
          Rajat <br /> Raghuvanshi
        </div>
      </div>
      <div className="my-6 px-4">
        <hr />
        <div className="text-center my-1">Software developer</div>
        <hr />
      </div>
      <SideLinks />
    </div>
  );
};

export default Sidebar;
