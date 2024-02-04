import React from 'react';
import MainHeading from '@/components/heading/MainHeading';
import AnimateOnLoad from '@/components/AnimateOnLoad';
import { poppinsBold, projectsList } from '@/lib/constants';
import ProjectCard from '@/components/projects/ProjectCard';
import AnimateOnScroll from '@/components/AnimanteOnScroll';

const page = () => {
  return (
    <section className="mx-5 md:mx-10 overflow-hidden min-h-screen text-white">
      <MainHeading title="My work" subTitle="Projects" />
      <div className="w-full flex">
        <AnimateOnLoad
          fromRight
          offset={2}
          duration={1.5}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          <p className="slide-in">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </AnimateOnLoad>
      </div>

      {projectsList.map(({ projects, topic }, topicIndex) => (
        <React.Fragment key={`topic-${topicIndex}`}>
          <AnimateOnScroll>
            <h3
              className={`text-3xl text-gray-400 font-bold mt-10 ${poppinsBold.className} card`}
            >
              -&gt; &nbsp;{topic}
            </h3>
            <div className="my-5 flex flex-wrap gap-7 lg:gap-10 card">
              {projects.map((project, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </React.Fragment>
      ))}
    </section>
  );
};

export default page;
