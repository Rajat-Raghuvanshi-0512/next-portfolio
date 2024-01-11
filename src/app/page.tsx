'use client';
import { styles } from '@/lib/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const toRotate = [
  'Web Developer',
  'UI/UX Designer',
  'Blockchain Developer',
  'App Developer',
];

const capriola = Poppins({
  subsets: ['latin'],
  weight: '800',
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
    <section className="w-full h-screen">
      <div className="m-8">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText + ' ' + capriola.className}>
          Overview
        </h2>
      </div>
      <div
        className={`${styles.paddingX} lg:px-10 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rotate-45 bg-[#01C1CF]" />
          <div className="w-1 sm:h-60 h-40 violet-gradient" />
        </div>
        <div className="mt-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="block sm:inline">
              👋Hi, I&apos;m <span className="text-[#01C1CF]">Rajat</span>
            </span>
            <a
              onClick={() => window.open('resume.pdf')}
              className="ml-3 text-[14px] sm:text-[10px] bg-opacity-90 px-2 py-1 rounded-3xl font-semibold -mt-10 md:mt-8 bg-[#01C1CF] hover:bg-[#02959f] hover:scale-90 cursor-pointer "
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
        </div>
      </div>
    </section>
  );
};

export default App;
