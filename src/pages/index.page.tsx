import React, { useEffect, useMemo, useRef, useState } from 'react';
// Types
import type { NextPage } from 'next';
// Functions
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
// Components
import Head from 'next/head';
import Nav from '../components/nav/nav';
import Introduction from '../components/pages/home/sections/introduction/introduction';
import WorkExperience from '../components/pages/home/sections/workExperience/workExperience';
import ContactMe from '../components/pages/home/sections/contactMe/contactMe';
import Technologies from '../components/pages/home/sections/technologies/technologies';
import CreativeProjects from '../components/pages/home/sections/creativeProjects/creativeProjects';
// Constants
// Assets
// Styles
import styles from './index.module.scss';

type TSections = '#introduction' | '#technologies' | '#work-experience' | '#creative-projects' | '#contact-me' | '';

const Home: NextPage = () => {
  const windowDimensions = useWindowDimensions();

  const { ref: introductionRef, inView: introductionInView } = useInView({ threshold: 1 });
  const { ref: technologiesRef, inView: technologiesInView } = useInView({ threshold: 1 });
  const { ref: workExperienceRef, inView: workExperienceInView } = useInView({ threshold: 1 });
  const { ref: creativeProjectsRef, inView: creativeProjectsInView } = useInView({ threshold: 1 });
  const { ref: contactMeRef, inView: contactMeInView } = useInView({ threshold: 1 });

  const inViews = useMemo<Array<{ label: TSections; isInView: any }>>(
    () => [
      { label: '#introduction', isInView: introductionInView },
      { label: '#technologies', isInView: technologiesInView },
      { label: '#work-experience', isInView: workExperienceInView },
      { label: '#creative-projects', isInView: creativeProjectsInView },
      { label: '#contact-me', isInView: contactMeInView },
    ],
    [introductionInView, technologiesInView, workExperienceInView, creativeProjectsInView, contactMeInView]
  );

  const [currentSection, setCurrentSection] = useState<TSections>('');

  useEffect(() => {
    for (const view of inViews) {
      if (view.isInView) {
        setCurrentSection(view.label);
        break;
      }
    }
  }, [inViews]);

  return (
    <>
      <Head>
        <title>Lachlan D&apos;Arcy</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles['root']}>
        <Nav currentSection={currentSection} />
        <main className={styles['main']}>
          <Introduction ref={introductionRef} />
          <Technologies ref={technologiesRef} />
          <WorkExperience ref={workExperienceRef} />
          <CreativeProjects ref={creativeProjectsRef} />
          <ContactMe ref={contactMeRef} />
        </main>
      </div>
    </>
  );
};

export default Home;
