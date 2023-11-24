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

      <div className={styles['projects']}>
        <Project
          project={{
            title: 'Game of Ur',
            description: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius
              venenatis, nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [builtWithTechnologies['react']],
          }}
        />
        <Project
          project={{
            title: 'Timeflit',
            description: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius
              venenatis, nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [builtWithTechnologies['react']],
          }}
        />
        <Project
          project={{
            title: 'Your chances',
            description: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius
              venenatis, nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [builtWithTechnologies['react']],
          }}
        />
        <Project
          project={{
            title: 'Simple Writing Test',
            description: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius
              venenatis, nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [builtWithTechnologies['react']],
          }}
        />
        <Project
          project={{
            title: 'Portfolio Site',
            description: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius
              venenatis, nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
            links: { demo: '', github: '' },
            builtWithTechnologies: [builtWithTechnologies['react']],
          }}
        />
      </div>
    </section>
  );
});

CreativeProjects.displayName = 'CreativeProjects';

export default CreativeProjects;
