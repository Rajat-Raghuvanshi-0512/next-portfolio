'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

interface IAnimateOnLoadProps extends React.PropsWithChildren {
  fromRight?: boolean;
  fromTop?: boolean;
  fromLeft?: boolean;
  fromBottom?: boolean;
  duration?: number;
  offset?: number;
  delay?: number;
}

const AnimateOnLoad = ({
  children,
  fromRight,
  fromTop,
  fromLeft,
  fromBottom,
  duration = 1,
  offset = 1,
  delay = 0,
}: IAnimateOnLoadProps) => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.timeline().fromTo(
        '.slide-in',
        {
          x: fromRight ? 100 * offset : fromLeft ? -100 * offset : 0,
          y: fromTop ? -100 * offset : fromBottom ? 100 * offset : 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          delay,
        }
      );
    },
    { scope: container }
  );
  return <div ref={container}>{children}</div>;
};

export default AnimateOnLoad;
