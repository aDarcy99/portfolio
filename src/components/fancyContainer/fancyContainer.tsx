import React, { ReactNode, useContext, CSSProperties, useRef } from 'react';
// Functions
import clsx from 'clsx';
import useMousePosition from '../../utils/hooks/useMousePosition';
import useElementBoundingBox from '../../utils/hooks/useElementBoundingBox';
// Styles
import styles from './fancyContainer.module.scss';

type TFancyContainerProps = {
  children: ReactNode;
  className?: string;
};

const FancyContainer = ({ children, className }: TFancyContainerProps) => {
  const fancyContainerRef = useRef(null);

  const bounding = useElementBoundingBox({ ref: fancyContainerRef });
  const mousePosition = useMousePosition();

  return (
    <div
      ref={fancyContainerRef}
      className={clsx(styles['root'], className)}
      style={
        {
          '--fancy-border-pos-x': `${mousePosition.x - bounding?.left - 100}px`,
          '--fancy-border-pos-y': `${mousePosition.y - bounding?.top - 100}px`,
        } as CSSProperties
      }
    >
      <div className={styles['inner-card']}>{children}</div>
    </div>
  );
};

export default FancyContainer;
