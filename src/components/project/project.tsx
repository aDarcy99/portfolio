import React, { ReactNode } from 'react';
// Components
import Divider from '../reusable/divider/divider';
import Tag from '../reusable/tag/tag';
// Style
import classes from './project.module.scss';

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
    <div className={classes['root']}>
      <div className={classes['showcase']} />
      <div className={classes['content']}>
        <h3 className={classes['title']}>{title}</h3>
        <p className={classes['description']}>{description}</p>
        {/* TODO: 3d phone with iframe for actual website */}
        <div></div>
        <div className={classes['built-with']}>
          <span>Built with: </span>
          {builtWithTechnologies.map((builtWithTechnology) => (
            <Tag key={builtWithTechnology.label}>
              {builtWithTechnology.icon} {builtWithTechnology.label}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
