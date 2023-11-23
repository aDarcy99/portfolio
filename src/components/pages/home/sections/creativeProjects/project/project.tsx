import React, { ReactNode } from 'react';
// Components
import Link from '../../../../../reusable/link/link';
import TechnologyTag from '../../../technologyTag/technologyTag';
import FancyContainer from '../../../../../fancyContainer/fancyContainer';
import Button from '../../../../../reusable/button/button';
// Style
import styles from './project.module.scss';

interface IProjectProps {
  project: {
    title: string;
    description: ReactNode;
    links: {
      demo: string;
      github: string;
    };
    builtWithTechnologies: { label: string; icon: ReactNode }[];
  };
}

const Project = ({ project, ...props }: IProjectProps) => {
  const { title, description, links, builtWithTechnologies } = project;

  return (
    <FancyContainer className={styles['root']}>
      <img className={styles['image']} src='' alt='' />
      <div className={styles['content']}>
        <h3 className={styles['title']}>{title}</h3>
        <p className={styles['description']}>{description}</p>

        <div></div>
        <div className={styles['built-with']}>
          <p className={styles['built-with-title']}>Built with: </p>
          {builtWithTechnologies.map((builtWithTechnology) => (
            <TechnologyTag key={builtWithTechnology.label} builtWithTechnology={builtWithTechnology} />
          ))}
        </div>
        <div className={styles['button-group']}>
          <Link href={links.demo}>
            <Button>Demo</Button>
          </Link>
          <Link href={links.github}>
            <Button>Github</Button>
          </Link>
        </div>
      </div>
    </FancyContainer>
  );
};

export default Project;
