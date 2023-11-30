import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Components
import Project from './project/project';
// Constants
import builtWithTechnologies from '../../../../../constants/builtWithTechnologies';
// Assets
import timeflitShowcaseImg from '../../../../../static/images/timeflitShowcase.png';
import portfolioShowcaseImg from '../../../../../static/images/portfolioShowcase.png';
// Styles
import styles from './creativeProjects.module.scss';
import textStyles from '../../../../../styles/text.module.scss';

type TCreativeProjectsProps = {};

const CreativeProjects = forwardRef((props: TCreativeProjectsProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref}>
      <h2 id='creative-projects' className={clsx(textStyles['heading'], styles['heading'])}>
        Creative Projects
      </h2>

      {/* <Project
          project={{
            title: 'Game of Ur',
            description: `
              A web application for the Royal Game of Ur. Built because I wanted to work with socket.io and I love the history of the game.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [
              builtWithTechnologies['nodeJs'],
              builtWithTechnologies['socket'],
              builtWithTechnologies['react'],
              builtWithTechnologies['sass'],
              builtWithTechnologies['webpack'],
            ],
          }}
        /> */}
      <Project
        project={{
          title: 'Timeflit',
          image: timeflitShowcaseImg,
          description: `
              A todo web app that allows you to both make and track time estimates for tasks.`,
          links: { demo: 'https://adarcy99.github.io/timeflit/', github: 'https://github.com/aDarcy99/timeflit/' },
          builtWithTechnologies: [
            builtWithTechnologies['typescript'],
            builtWithTechnologies['react'],
            builtWithTechnologies['sass'],
            builtWithTechnologies['webpack'],
            builtWithTechnologies['babel'],
            builtWithTechnologies['figma'],
          ],
        }}
      />
      {/* <Project
          project={{
            title: 'Your chances',
            description: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius
              venenatis, nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [builtWithTechnologies['react']],
          }}
        /> */}
      {/* <Project
          project={{
            title: 'Simple Writing Test',
            description: `
              A writing speed test website. Built because I wanted to make an application with vanilla javascript after using react for so long.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [builtWithTechnologies['html'], builtWithTechnologies['javascript']],
          }}
        /> */}
      <Project
        project={{
          title: 'Portfolio Site',
          image: portfolioShowcaseImg,
          description: `
              A portfolio website showcasing my work and contact information.`,
          links: { demo: 'https://lachlandarcy.com/', github: 'https://github.com/aDarcy99/portfolio' },
          builtWithTechnologies: [
            builtWithTechnologies['typescript'],
            builtWithTechnologies['react'],
            builtWithTechnologies['sass'],
            builtWithTechnologies['nextJs'],
            builtWithTechnologies['figma'],
          ],
        }}
      />
    </section>
  );
});

CreativeProjects.displayName = 'CreativeProjects';

export default CreativeProjects;
