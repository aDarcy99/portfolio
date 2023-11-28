import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Components
import TechnologyTag from '../../technologyTag/technologyTag';
// Constants
import builtWithTechnologies from '../../../../../constants/builtWithTechnologies';
// Styles
import styles from './technologies.module.scss';
import textStyles from '../../../../../styles/text.module.scss';

type TTechnologiesProps = {};

const knownTechnologies = Object.entries(builtWithTechnologies).map(([_, value]) => value) as Array<{ label: string; icon: any }>;

const Technologies = forwardRef((props: TTechnologiesProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref}>
      <h2 id='technologies' className={clsx(textStyles['heading-text'], styles['heading'])}>
        Technologies
      </h2>
      <p>Heres most of the relevant technologies I&apos;ve worked with so far, but I&apos;m always open to expanding my toolset and learning new things!</p>
      <div className={styles['technology-list']}>
        {knownTechnologies.map((technology) => (
          <TechnologyTag key={technology.label} builtWithTechnology={technology} />
        ))}
      </div>
    </section>
  );
});

Technologies.displayName = 'Technologies';

export default Technologies;
