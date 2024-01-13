'use client';
import { styles } from '@/lib/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { MyImg, logos } from '@/lib/constants';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import MainHeading from '@/components/heading/MainHeading';

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

  useEffect(() => {
    const tickInterval = setInterval(() => {
      tick();
    }, delay);
    return () => clearInterval(tickInterval);
  }, [text, tick, delay]);
  return (
    <section className="mx-10">
      <MainHeading title="introduction" subTitle="overview" />
      <div className={` grid grid-cols-5 gap-5 md:gap-10 lg:gap-12`}>
        <div className="floating-container w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] overflow-clip ml-10 mt-14 col-span-2">
          <Image
            src={MyImg}
            className="object-cover  object-top"
            alt="me"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-3">
          <h1
            className={`text-[clamp(3rem,8vmin,10rem)] lg:leading-[80px] text-white ${poppinsSemiBold.className}`}
          >
            <span className="block sm:inline">
              👋Hi, I&apos;m <span className="text-[#01C1CF]">Rajat</span>
            </span>
            <a
              onClick={() => window.open('resume.pdf')}
              className="ml-3 text-[14px] sm:text-[10px] bg-opacity-90 px-2 py-1 rounded-3xl font-semibold -mt-10 md:mt-8 bg-[#01C1CF] hover:bg-[#02959f] duration-300 hover:scale-90 cursor-pointer "
              title="View Resume"
            >
              📄Resume
            </a>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 lg:-mt-2 pl-3 sm:pl-10 text-white-100 font-medium`}
          >
            🚀 I am&nbsp;
            <span className="text-[#01C1CF] font-bold">
              {text}
              <span className="text-3xl pl-[2px] animate-pulse font-normal">
                |
              </span>
            </span>
          </p>
          <div className="info flex gap-3 items-end justify-end m-10">
            <Link
              href="https://github.com/Rajat-Raghuvanshi-0512"
              target="_blank"
              rel="noopener noreferer"
            >
              <Github color="#fff" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajat-raghuvanshi-315593201/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Linkedin color="#fff" />
            </Link>
          </div>
          <div className="tech text-white font-bold">
            <h4>Technologies</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-5 my-5">
              {logos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.src}
                  alt="logo"
                  width={40}
                  height={40}
                  className="hover:drop-shadow-white duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
