'use client';
import MainHeading from '@/components/heading/MainHeading';
import { experiences } from '@/lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
const WorkPage = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.card');
    let anim: gsap.core.Tween;
    boxes.forEach((box) => {
      anim = gsap.fromTo(
        box,
        { autoAlpha: 0, y: 70 },
        { duration: 1.4, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });
    return () => {
      anim?.kill();
    };
  }, []);
  return (
    <section className="mx-10 overflow-hidden min-h-screen text-white">
      <MainHeading title="WHAT I HAVE DONE SO FAR" subTitle="Work Experience" />

      <div className="mt-10 work-wrapper">
        {experiences.map((experience) => (
          <div
            key={experience.company_name}
            className="flex justify-between gap-5 mb-14 card"
          >
            <div className="flex-[0.5] flex flex-col items-center justify-center gap-3">
              <div
                className={`flex items-center justify-center rounded-full p-2 w-[60px] h-[60px] slide-in`}
                style={{ backgroundColor: experience.iconBg }}
              >
                <Image
                  src={experience.icon}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="slide-in">{experience.company_name}</h3>
            </div>
            <div className="flex-[1.5]">
              <p className="text-2xl text-gray-300 font-bold slide-in">
                {experience.title}
              </p>
              <p className="text-slate-500 text-sm slide-in">
                {experience.date}
              </p>
              <ul className="mt-4 ml-5 text-slate-300 slide-in scrollTrigger">
                {experience.points.map((point) => (
                  <li className="list-disc pb-1" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkPage;
