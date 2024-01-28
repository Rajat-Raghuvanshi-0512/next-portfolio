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
  className?: string;
}

const AnimateOnScroll = ({ children, className }: IAnimateOnLoadProps) => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#vote',
          start: '20% 75%',
          onEnter: () => {
            gsap.to('.name', { opacity: 0 });
          },
        },
      });
    },
    { scope: container }
  );
  return (
    <div className={className} ref={container}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
