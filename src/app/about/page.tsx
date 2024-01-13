import MainHeading from '@/components/heading/MainHeading';
import React from 'react';

const page = () => {
  return (
    <section className="mx-10">
      <MainHeading title="introduction" subTitle="detail" />
      <p className="text-white font-mono text-justify mt-5">
        Experienced web developer skilled in crafting, enhancing, and sustaining
        high-performing, user-centric websites. Proficient in modern
        technologies and adheres to best design practices. A resourceful problem
        solver eager to collaborate with a team of like-minded individuals.
      </p>
    </section>
  );
};

export default page;
