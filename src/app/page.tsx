'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { MyImg } from '@/lib/constants';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import MainHeading from '@/components/heading/MainHeading';
import Technologies from '@/components/home/Technologies';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const toRotate = [
  'Web Developer',
  'UI/UX Designer',
  'Blockchain Developer',
  'App Developer',
];

const poppinsSemiBold = Poppins({
  subsets: ['latin'],
  weight: '700',
});

const App = () => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState('');
  const [delay, setDelay] = useState(150);

  const tick = useCallback(() => {
    let i = count % toRotate.length;
    let currentText = toRotate[i];
    let updatedText = isDeleting
      ? currentText.substring(0, text.length - 1)
      : currentText.substring(0, text.length + 1);

    setText(updatedText);

    if (updatedText === currentText) {
      setDelay(1000);
    }

    if (!isDeleting && text === currentText) {
      setIsDeleting(true);
      setDelay(30);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setDelay(150);
      setCount((prev) => prev + 1);
    }
  }, [text, count, isDeleting]);

  const ref = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.timeline().fromTo(
        '.fadeIn',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
        }
      );
    },
    { scope: ref }
  );

  useEffect(() => {
    const tickInterval = setInterval(() => {
      tick();
    }, delay);
    return () => clearInterval(tickInterval);
  }, [text, tick, delay]);

  return (
    <section className="px-5 md:mx-10 overflow-hidden" ref={ref}>
      <MainHeading title="introduction" subTitle="overview" />
      <div className={`grid md:grid-cols-5 gap-5 md:gap-10 lg:gap-12`}>
        <div className="floating-container w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] overflow-clip m-4 md:ml-10 lg:mt-14 col-span-2">
          <Image
            src={MyImg}
            className="object-cover object-top"
            alt="me"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-3">
          <h1
            className={`text-[clamp(1rem,7vmin,6rem)] lg:leading-[80px] text-white opacity-0 fadeIn ${poppinsSemiBold.className}`}
          >
            <span className="block sm:inline">
              👋&nbsp;Hi, I&apos;m <span className="text-[#01C1CF]">Rajat</span>
            </span>
            <a
              onClick={() => window.open('resume.pdf')}
              className="ml-3 text-[12px] sm:text-[10px] bg-opacity-90 px-2 py-1 rounded-3xl font-semibold -mt-10 md:mt-8 bg-[#01C1CF] hover:bg-[#02959f] duration-300 hover:scale-90 cursor-pointer "
              title="View Resume"
            >
              📄&nbsp;Resume
            </a>
          </h1>
          <p
            className={`text-[clamp(1rem,4vmin,5rem)] opacity-0 text-slate-200 mt-2 lg:-mt-2 pl-3 sm:pl-10 text-white-100 font-medium fadeIn`}
          >
            🚀 I am&nbsp;
            <span className="text-[#01C1CF] font-bold">
              {text}
              <span className="text-3xl pl-[2px] animate-pulse font-normal">
                |
              </span>
            </span>
          </p>
          <div className="info flex gap-3 items-end justify-end m-5 md:m-8 lg:m-10 fadeIn opacity-0">
            <Link
              href="https://github.com/Rajat-Raghuvanshi-0512"
              target="_blank"
              rel="noopener noreferer"
              className="hover:drop-shadow-white duration-300 hover:scale-110"
            >
              <Github color="#fff" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajat-raghuvanshi-315593201/"
              target="_blank"
              rel="noopener noreferer"
              className="hover:drop-shadow-white duration-300 hover:scale-110"
            >
              <Linkedin color="#fff" />
            </Link>
          </div>
          <Technologies />
        </div>
      </div>
    </section>
  );
};

export default App;
