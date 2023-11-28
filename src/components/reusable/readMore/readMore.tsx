import clsx from 'clsx';
import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import { THTMLDivAttributes } from '../../../types/elements';
import useElementBoundingBox from '../../../utils/hooks/useElementBoundingBox';
import Button from '../button/button';
// Styles
import styles from './readMore.module.scss';

type Props = {
  children: ReactNode;
  revealProps?: THTMLDivAttributes;
};

const ReadMore = ({ children, revealProps }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  const onReadMoreButtonClick = () => {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  };

  return (
    <>
      <div {...revealProps} className={clsx(styles['reveal'], isHidden && styles['is-reveal-hidden'], revealProps?.className)}>
        {children}
      </div>
      <Button className={clsx(styles['button'], !isHidden && styles['is-button-hidden'])} variant='transparent' color='white' onClick={onReadMoreButtonClick}>
        {isHidden ? 'Show more...' : 'Hide...'}
      </Button>
    </>
  );
};

export default ReadMore;
