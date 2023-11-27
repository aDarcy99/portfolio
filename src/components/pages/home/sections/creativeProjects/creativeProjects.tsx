import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Components
import Project from './project/project';
// Constants
import builtWithTechnologies from '../../../../../constants/builtWithTechnologies';
// Styles
import styles from './creativeProjects.module.scss';
import textStyles from '../../../../../styles/text.module.scss';

type TCreativeProjectsProps = {};

const CreativeProjects = forwardRef((props: TCreativeProjectsProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref}>
      <h2 id='creative-projects' className={clsx(textStyles['heading-text'], styles['heading'])}>
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
          description: `
              A todo web app that allows you to both make and track time estimates for tasks. Built because I wanted a way to track my time estimates.`,
          links: { demo: '', github: '' },
          builtWithTechnologies: [builtWithTechnologies['react'], builtWithTechnologies['sass'], builtWithTechnologies['webpack']],
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
          description: `
              A website to display what I've worked on and where you can find me.`,
          links: { demo: 'lachlandarcy.com', github: '' },
          builtWithTechnologies: [builtWithTechnologies['react']],
        }}
      />
    </section>
  );
});

CreativeProjects.displayName = 'CreativeProjects';

export default CreativeProjects;
