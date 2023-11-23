import React, { ReactNode } from 'react';
// Components
import Tag from '../../../reusable/tag/tag';
// Styles
import styles from './technologyTag.module.scss';

type TTechnologyTagProps = {
  builtWithTechnology: { icon: ReactNode; label: string };
};

const TechnologyTag = ({ builtWithTechnology }: TTechnologyTagProps) => {
  return (
    <Tag className={styles['root']}>
      {builtWithTechnology.icon} {builtWithTechnology.label}
    </Tag>
  );
};

export default TechnologyTag;
