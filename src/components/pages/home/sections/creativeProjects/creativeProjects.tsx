import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Components
import Project from './project/project';
// Constants
import builtWithTechnologies from '../../../../../constants/builtWithTechnologies';
// Assets
import timeflitShowcaseImg from '../../../../../static/images/timeflitShowcase.png';
import simpleTypingTestShowcaseImg from '../../../../../static/images/simpleTypingTestShowcase.png';
import yourChancesShowcaseImg from '../../../../../static/images/yourChancesShowcase.png';
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
              A web app that allows you to both make and track time estimates for tasks.`,
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
      <Project
        project={{
          title: 'Your chances',
          image: yourChancesShowcaseImg,
          description: `
              A web app that simulates your chances of being born in a certain country by utilizing data from the CIA's World Factbook.`,
          links: { demo: 'https://adarcy99.github.io/your-chances/', github: 'https://github.com/aDarcy99/your-chances' },
          builtWithTechnologies: [
            builtWithTechnologies['typescript'],
            builtWithTechnologies['react'],
            builtWithTechnologies['jss'],
            builtWithTechnologies['webpack'],
            builtWithTechnologies['babel'],
            builtWithTechnologies['figma'],
          ],
        }}
      />
      <Project
        project={{
          title: 'Simple Typing Test',
          image: simpleTypingTestShowcaseImg,
          description: `
              A simple writing speed test website.`,
          links: { demo: 'https://adarcy99.github.io/simple-typing-test/', github: 'https://github.com/aDarcy99/simple-typing-test' },
          builtWithTechnologies: [
            builtWithTechnologies['javascript'],
            builtWithTechnologies['html'],
            builtWithTechnologies['tailwind'],
            builtWithTechnologies['webpack'],
            builtWithTechnologies['babel'],
            builtWithTechnologies['figma'],
          ],
        }}
      />
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
