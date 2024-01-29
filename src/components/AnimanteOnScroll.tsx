'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

interface IAnimateOnLoadProps extends React.PropsWithChildren {}
gsap.registerPlugin(ScrollTrigger);
const AnimateOnScroll = ({ children }: IAnimateOnLoadProps) => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.card');
    let anim: gsap.core.Tween;
    boxes.forEach((box) => {
      anim = gsap.fromTo(
        box,
        { autoAlpha: 0, y: 90 },
        { duration: 1.7, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });
    return () => {
      anim?.kill();
    };
  }, []);
  return children;
};

export default AnimateOnScroll;
