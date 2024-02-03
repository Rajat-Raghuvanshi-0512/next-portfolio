import { TestimonialCardProps } from '@/lib/types';
import Image from 'next/image';
import React from 'react';
import AnimateOnLoad from '../AnimateOnLoad';

const TestimonialsCard = ({
  name,
  designation,
  company,
  image,
  summary,
  idx,
}: TestimonialCardProps) => {
  return (
    <div
      className={`flex gap-5 mx-5 bg-tertiary p-5 lg:p-12 shadow-white/10 shadow-inner rounded-tl-[100px] rounded-tr-[70px] rounded-br-[50px] ${idx % 2 === 0
        ? 'flex-row rounded-tl-[100px] rounded-tr-[70px] rounded-br-[50px]'
        : 'flex-row-reverse rounded-tr-[100px] rounded-tl-[70px] rounded-bl-[50px] rounded-br-none'
        }`}
    >
      <AnimateOnLoad
        fromLeft={idx % 2 === 0}
        fromRight={idx % 2 !== 0}
        duration={1.8}
        offset={0.5}
        className="flex-[0.7] justify-center items-center flex"
      >
        <Image
          src={image}
          alt="avatar"
          width={180}
          height={180}
          className="rounded-full slide-in"
        />
      </AnimateOnLoad>
      <AnimateOnLoad
        fromLeft={idx % 2 !== 0}
        fromRight={idx % 2 === 0}
        duration={1.8}
        offset={0.5}
        className="flex-[1.3] mx-5"
      >
        <div className="relative text-slate-300 slide-in">
          <span className="text-6xl font-bold -left-10 -top-2 absolute">
            &ldquo;
          </span>
          <p className="text-3xl text-justify font-sans font-semibold leading-snug">
            {summary}
          </p>
        </div>
        <div className="flex flex-col items-end slide-in">
          <p className="font-bold text-xl mt-5 lg:mt-9"> - {name}</p>
          <p className="text-gray-400 text-sm">
            {designation} - {company}
          </p>
        </div>
      </AnimateOnLoad>
    </div>
  );
};

export default TestimonialsCard;
