import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Components
import FancyContainer from '../../../../fancyContainer/fancyContainer';
import TechnologyTag from '../../technologyTag/technologyTag';
import ReadMore from '../../../../reusable/readMore/readMore';
// Constants
import builtWithTechnologies from '../../../../../constants/builtWithTechnologies';
// Styles
import styles from './workExperience.module.scss';
import textStyles from '../../../../../styles/text.module.scss';

type TWorkExperienceProps = {};

type TJobs = Array<{}>;
const jobs = [
  {
    company: 'Howtoo',
    positions: [
      {
        title: 'Full-stack Developer',
        dates: { start: 'June 2022', finish: 'April 2023' },
        description: (
          <>
            <p>At the same company, I was promoted to a full-stack developer, and contributed to all facets of the product we offered.</p>
            <p>
              In this role, I gained valuable insights into the impact of my code, becoming more aware of the concept of technical debt and its consequences.
              Additionally, I deepened my understanding of the libraries we used such as the Sequelize ORM, Segment for analytics, and AJV schema validation. I
              also had the opportunity to work with AWS and AWS Lambda, albeit at a more surface level.
            </p>
            <p>
              Throughout my time in the position I played a key role in implementing major features and making significant changes to the functionality of our
              product. This involved thoughtful consideration of database schema modifications, seamless migration to new schemas, and managing potential
              breaking changes to the UI—all while causing minimal downtime in production.
            </p>
          </>
        ),
      },
      {
        title: 'Front-end Developer',
        dates: { start: 'October 2021', finish: 'June 2022' },
        description: (
          <>
            <p>
              As my first job as a developer this introduced me to the complexities of collaborative development within a team setting. This mainly involved
              using effective version control practices, adapting to the teams coding stlye and established guidelines, as well as commuinicating with
              designers.
            </p>
            <p>
              I learnt how to better use version control within a team, many different libraries and frameworks such as web components, and a greater understand
              of how react works.
            </p>
            <p>
              While working in this position my main achievement in this role was contributing to the creation of a design system for the product. This system
              evolved over my tenure at the company and became integral to the application&apos;s functionality.
            </p>
          </>
        ),
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
      <h2 id='work-experience' className={clsx(textStyles['heading'], styles['heading'])}>
        Work Experience
      </h2>
      {jobs.map((job, jobIdx) => (
        <FancyContainer key={jobIdx} rootProps={{ className: styles['job'] }}>
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
              <ReadMore revealProps={{ className: styles['description'] }}>{position.description}</ReadMore>
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
