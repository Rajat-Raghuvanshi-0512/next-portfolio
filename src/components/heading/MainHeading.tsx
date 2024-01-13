'use client';
import React, { useRef } from 'react';
import { styles } from '@/lib/styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { poppinsBold } from '@/lib/constants';

interface IMainHeadingProps {
  title: string;
  subTitle: string;
}

const MainHeading = ({ title, subTitle }: IMainHeadingProps) => {
  const container = useRef(null);
  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split('').map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };
  useGSAP(
    () => {
      // gsap code here...
      gsap.timeline().fromTo(
        '.name-animation',
        { x: -100, opacity: 0, rotate: -3 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
          transformOrigin: 'left top',
          stagger: {
            each: 0.05,
            from: 'random',
          },
        }
      ); // <-- automatically reverted
    },
    { scope: container }
  );
  return (
    <div className="mt-10" ref={container}>
      <p className={styles.sectionSubText + ' uppercase'}>
        {renderLetters(title, 'title')}
      </p>
      <h2
        className={
          styles.sectionHeadText + ' capitalize ' + poppinsBold.className
        }
      >
        {renderLetters(subTitle, 'sub-title')}
      </h2>
    </div>
  );
};

export default MainHeading;
