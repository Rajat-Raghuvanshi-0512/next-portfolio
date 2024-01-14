'use client';
import { logos } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';

const Technologies = () => {
  const ref = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.timeline().fromTo(
        '.name-animation',
        { y: 50, opacity: 0, rotate: -60 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: {
            each: 0.2,
            from: 'start',
          },
        }
      ); // <-- automatically reverted
    },
    { scope: ref }
  );
  return (
    <div className="tech text-white font-bold" ref={ref}>
      <h4 className="fadeIn opacity-0">Technologies</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-10">
        {logos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            alt="logo"
            width={40}
            height={40}
            className="pulse-shadow duration-300 name-animation opacity-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
