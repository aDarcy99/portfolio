import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Components
import FancyContainer from '../../../../fancyContainer/fancyContainer';
import TechnologyTag from '../../technologyTag/technologyTag';
// Constants
import builtWithTechnologies from '../../../../../constants/builtWithTechnologies';
// Styles
import styles from './workExperience.module.scss';
import textStyles from '../../../../../styles/text.module.scss';

type TWorkExperienceProps = {};

type TJobs = Array<{}>;
const jobs = [
  {
    company: 'howtoo',
    positions: [
      {
        title: 'Full-stack Developer',
        dates: { start: 'June 2022', finish: 'April 2023' },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius venenatis,
    nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
      },
      {
        title: 'Front-end Developer',
        dates: { start: 'June 2022', finish: 'April 2023' },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius venenatis,
    nisl sapien aliquet leo, venenatis viverra eros mauris eget turpis.`,
      },
    ],
    technologies: [
      builtWithTechnologies['html'],
      builtWithTechnologies['css'],
      builtWithTechnologies['javascript'],
      builtWithTechnologies['react'],
      builtWithTechnologies['nextJs'],
      builtWithTechnologies['nodeJs'],
      builtWithTechnologies['SQL'],
    ],
  },
];

const WorkExperience = forwardRef((props: TWorkExperienceProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref}>
      <h2 id='work-experience' className={clsx(textStyles['heading-text'], styles['heading'])}>
        Work Experience
      </h2>
      {jobs.map((job, jobIdx) => (
        <FancyContainer key={jobIdx} className={styles['job']}>
          {job.positions.map((position, positionIdx) => (
            <div key={positionIdx} className={styles['position']}>
              <div className={styles['info-container']}>
                <h3 className={styles['info']}>{position.title}</h3>
                <div className={styles['seperator']} />
                <h3 className={styles['info']}>{job.company}</h3>
              </div>
              <h4 className={styles['date']}>
                {position.dates.start} – {position.dates.finish}
              </h4>
              <p>{position.description}</p>
            </div>
          ))}

          <div className={styles['worked-with']}>
            <p className={styles['worked-with-title']}>Worked with:</p>
            {job.technologies.map((technology) => (
              <TechnologyTag key={technology.label} builtWithTechnology={technology} />
            ))}
          </div>
        </FancyContainer>
      ))}
    </section>
  );
});

WorkExperience.displayName = 'WorkExperience';

export default WorkExperience;
