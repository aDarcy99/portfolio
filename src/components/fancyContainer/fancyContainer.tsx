import React, { ReactNode, useContext, CSSProperties, useRef } from 'react';
// Types
import { THTMLDivAttributes } from '../../types/elements';
// Functions
import clsx from 'clsx';
import useMousePosition from '../../utils/hooks/useMousePosition';
import useElementBoundingBox from '../../utils/hooks/useElementBoundingBox';
// Styles
import styles from './fancyContainer.module.scss';

type TFancyContainerProps = {
  children: ReactNode;
  rootProps?: THTMLDivAttributes;
  innerProps?: THTMLDivAttributes;
};

const FancyContainer = ({ children, rootProps, innerProps }: TFancyContainerProps) => {
  const fancyContainerRef = useRef(null);

  const bounding = useElementBoundingBox({ ref: fancyContainerRef });
  const mousePosition = useMousePosition();

  return (
    <div
      {...rootProps}
      ref={fancyContainerRef}
      className={clsx(styles['root'], rootProps?.className)}
      style={
        {
          '--fancy-border-pos-x': `${mousePosition.x - bounding?.left - 100}px`,
          '--fancy-border-pos-y': `${mousePosition.y - bounding?.top - 100}px`,
          ...innerProps?.style,
        } as CSSProperties
      }
    >
      <div {...innerProps} className={clsx(styles['inner-card'], innerProps?.className)}>
        {children}
      </div>
    </div>
  );
};

export default FancyContainer;
