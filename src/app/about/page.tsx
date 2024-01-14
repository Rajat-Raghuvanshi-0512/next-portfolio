import AnimateOnLoad from '@/components/AnimateOnLoad';
import MainHeading from '@/components/heading/MainHeading';
import React from 'react';

const page = () => {
  return (
    <section className="mx-10 overflow-hidden">
      <MainHeading title="introduction" subTitle="detail" />
      <AnimateOnLoad fromRight duration={2} offset={1.5}>
        <p className="text-white font-mono text-justify mt-5 slide-in opacity-0">
          Experienced web developer skilled in crafting, enhancing, and
          sustaining high-performing, user-centric websites. Proficient in
          modern technologies and adheres to best design practices. A
          resourceful problem solver eager to collaborate with a team of
          like-minded individuals.
        </p>
      </AnimateOnLoad>
    </section>
  );
};

export default page;
