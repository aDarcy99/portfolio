import React from 'react';
// Types
import type { NextPage } from 'next';
// Functions
import clsx from 'clsx';
// Components
import Head from 'next/head';
import Button from '../components/reusable/button/button';
import Input from '../components/reusable/input/input';
import Container from '../components/reusable/container/container';
import Header from '../components/header/header';
import Project from '../components/project/project';
import Divider from '../components/reusable/divider/divider';
import Nav from '../components/nav/nav';
// Constants
import builtWithTechologies from '../constants/builtWithTechnologies';
// Assets
// Styles
import classes from './index.module.scss';
import textClasses from '../styles/classes/text.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My place</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={classes['root']}>
        <Nav />
        <main className={classes['main']}>
          {/* <h1 className={clsx(classes['title'], textClasses['title-text'])}>Lachlan D'Arcy</h1> */}
          <section className={classes['section']}>
            <h2 className={classes['heading']} id='technologies'>
              Technologies
            </h2>
            <p>
              I’m a passionate Full-Stack Web Developer looking for work as a full-stack or front-end developer. I’m looking forward to expanding my knowledge
              in an interactive and collaborative environment to develop quality websites.
            </p>
          </section>
          <section className={classes['section']}>
            <h2 className={classes['heading']} id='work-experience'>
              Work experience
            </h2>
            <p>
              I’m a passionate Full-Stack Web Developer looking for work as a full-stack or front-end developer. I’m looking forward to expanding my knowledge
              in an interactive and collaborative environment to develop quality websites.
            </p>
          </section>
          <section className={classes['section']}>
            <h2 className={classes['heading']} id='creative-projects'>
              Creative projects
            </h2>
            <Project
              project={{
                title: 'Your Chances',
                description: `I’m a passionate Full-Stack Web Developer looking for work as a full-stack or front-end developer. I’m looking forward to expanding my knowledge
                in an interactive and collaborative environment to develop quality websites.`,
                links: {
                  demo: '/',
                  github: '/',
                },
                builtWithTechnologies: [builtWithTechologies['javascript']],
              }}
            />
            <Project
              project={{
                title: 'Simple Typing Test',
                description: `I’m a passionate Full-Stack Web Developer looking for work as a full-stack or front-end developer. I’m looking forward to expanding my knowledge
                in an interactive and collaborative environment to develop quality websites.`,
                links: {
                  demo: '/',
                  github: '/',
                },
                builtWithTechnologies: [builtWithTechologies['javascript'], builtWithTechologies['css'], builtWithTechologies['html']],
              }}
            />
            <Project
              project={{
                title: 'Portfolio',
                description: `I’m a passionate Full-Stack Web Developer looking for work as a full-stack or front-end developer. I’m looking forward to expanding my knowledge
                in an interactive and collaborative environment to develop quality websites.`,
                links: {
                  demo: '/',
                  github: '/',
                },
                builtWithTechnologies: [
                  builtWithTechologies['javascript'],
                  builtWithTechologies['react'],
                  builtWithTechologies['nextJs'],
                  builtWithTechologies['jss'],
                ],
              }}
            />
          </section>
          <section className={classes['section']}>
            <h2 className={classes['heading']} id='about-me'>
              About me
            </h2>
            <p>
              I’m a passionate Full-Stack Web Developer looking for work as a full-stack or front-end developer. I’m looking forward to expanding my knowledge
              in an interactive and collaborative environment to develop quality websites.
            </p>
          </section>
          <section className={classes['section']}>
            <h2 className={classes['heading']} id='contact-me'>
              Contact me
            </h2>
            <p>
              I’m a passionate Full-Stack Web Developer looking for work as a full-stack or front-end developer. I’m looking forward to expanding my knowledge
              in an interactive and collaborative environment to develop quality websites.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
