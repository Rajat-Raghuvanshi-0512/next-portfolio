import AnimateOnLoad from '@/components/AnimateOnLoad';
import TechCard from '@/components/about/TechCard';
import MainHeading from '@/components/heading/MainHeading';
import { domains } from '@/lib/constants';
import React from 'react';

const page = () => {
  return (
    <section className="mx-10 overflow-hidden pb-10 min-h-screen">
      <MainHeading title="introduction" subTitle="detail" />
      <AnimateOnLoad fromRight duration={2} offset={1.5}>
        <p className="text-white font-mono text-justify mt-5 slide-in opacity-0 md:text-sm lg:text-base 2xl:text-xl">
          Experienced web developer skilled in crafting, enhancing, and
          sustaining high-performing, user-centric websites. Proficient in
          modern technologies and adheres to best design practices. A
          resourceful problem solver eager to collaborate with a team of
          like-minded individuals.
        </p>
      </AnimateOnLoad>
      <AnimateOnLoad fromRight duration={2.3} offset={2}>
        <p className="text-white font-mono text-justify mt-5 slide-in opacity-0 md:text-sm lg:text-base 2xl:text-xl">
          I have an experience of 4 years in software development with knowledge
          of different domains like web development, App development, UI/UX
          designing and Blockchain development.
        </p>
      </AnimateOnLoad>
      <div className="flex flex-wrap gap-10 2xl:gap-16 mt-10 justify-center">
        {domains.map((domain, i) => (
          <AnimateOnLoad
            key={domain.name}
            fromBottom
            duration={2}
            offset={1.5}
            delay={i / 2}
          >
            <TechCard {...domain} />
          </AnimateOnLoad>
        ))}
      </div>
    </section>
  );
};

export default page;
