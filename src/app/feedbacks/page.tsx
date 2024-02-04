import MainHeading from '@/components/heading/MainHeading';
import TestimonialsCard from '@/components/testimonials/TestimonialsCard';
import { testimonials } from '@/lib/constants';
import React from 'react';

const page = () => {
  return (
    <section className="mx-5 md:px-10 mb-10 overflow-hidden min-h-screen text-white">
      <MainHeading title="What others say " subTitle="Testimonials" />
      <div className="flex flex-col gap-5 lg:gap-20 mt-10">
        {testimonials.map((testimonials, idx) => (
          <TestimonialsCard
            key={testimonials.name}
            {...testimonials}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
