'use client';
import { ProjectCardType } from '@/lib/types';
import { Github, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_url,
}: ProjectCardType) => {
  return (
    <Tilt className="bg-[#151030] p-5 rounded-2xl sm:w-[200px] lg:w-[270px] w-full">
      <div className="relative w-full h-[100px] lg:h-[130px] overflow-clip rounded-lg flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={image}
          typeof="video/mp4"
          className="w-full h-[100px] lg:h-[130px] object-cover bg-gray-200 rounded"
        />

        <div className="absolute hover:bg-[rgba(0,0,0,0.4)] w-full h-full top-0 left-0 flex items-center justify-center gap-5 duration-300 opacity-0 hover:opacity-100">
          <a
            className="hover:opacity-100 hover:scale-90 duration-300"
            href={source_code_link}
            target="_blank"
            rel="noreferrer noopener"
            title="View code"
          >
            <Github className="w-8 h-8 rounded-full text-white bg-[rgba(0,0,0,0.4)] p-2" />
          </a>
          <a
            className="hover:opacity-100 hover:scale-90 duration-300"
            href={live_url}
            target="_blank"
            rel="noreferrer noopener"
            title="View site"
          >
            <Globe className="w-8 h-8 text-black rounded-full bg-[rgba(255,255,255,0.5)] p-2" />
          </a>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold lg:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-xs lg:text-[12px]">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

export default ProjectCard;
