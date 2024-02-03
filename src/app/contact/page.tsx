'use client'
import React, { useState } from 'react';
import MainHeading from '@/components/heading/MainHeading';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  return (
    <section className="px-10 overflow-hidden min-h-screen text-white">
      <MainHeading subTitle="Contact Me" title="Get in touch" />
      <div className="flex gap-10">
        <form className="mt-12 flex flex-col gap-5 flex-1">
          <label className="flex flex-col">
            <span className="text-white font-medium text-sm mb-2">Your Name*</span>
            <input type="text" name="name" placeholder="What's your good name?" className="bg-tertiary py-3 px-4 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium text-sm" required onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.name} />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium text-sm mb-2">Your email*</span>
            <input type="email" name="email" placeholder="What's your web address?" className="bg-tertiary py-3 px-4 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium text-sm" required onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.email} />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium text-sm mb-2">Your Message*</span>
            <textarea rows={5} name="message" placeholder="What you want to say?" className="bg-tertiary py-3 px-4 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium text-sm resize-none" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.message} required></textarea>
          </label>
          <button type="submit" className="bg-tertiary py-[6px] text-sm px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">Send</button>
        </form>
        <div className='flex-1 flex justify-center items-centers'>
          <Image src={'https://res.cloudinary.com/rajat0512/image/upload/v1706979863/portfolio/contact/nh4i1u82limwhujwppme.png'} alt='illustration' width={300} height={300} className='object-contain w-[350px] h-full ' />
        </div>
      </div>
    </section >
  );
};

export default ContactPage;
