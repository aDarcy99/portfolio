import clsx from 'clsx';
import React, { FunctionComponent, ReactNode, useState } from 'react';
// Styles
import classes from './carousel.module.scss';

interface CarouselProps {
  items: Array<ReactNode>;
  isButtonsVisible?: Boolean;
  className?: string;
}

const Carousel: FunctionComponent<CarouselProps> = ({ items, className, isButtonsVisible = true }) => {
  const [activeCarouselItem, setActiveCarouselItem] = useState<number>(0);

  const onPaginationItemClick = (idx: number) => {
    setActiveCarouselItem(idx);
  };

  const onPaginationButtonClick = (position: 'left' | 'right') => {
    if (position === 'left') {
      setActiveCarouselItem(activeCarouselItem - 1);
    } else if (position === 'right') {
      setActiveCarouselItem(activeCarouselItem + 1);
    }
  };

  return (
    <div className={clsx(classes['carousel'], className)}>
      <div className={clsx(classes['carousel__wrapper'])} style={{ transform: `translate3d(-${activeCarouselItem * 100}%, 0px, 0px)` }}>
        {items.map((item, itemIdx) => (
          <div key={itemIdx} className={clsx(classes['carousel__item'], activeCarouselItem === itemIdx ? classes['is-active'] : null)}>
            {item}
          </div>
        ))}
      </div>
      <div className={classes['carousel__pagination']}>
        {items.map((item, itemIdx) => (
          <button
            key={itemIdx}
            className={clsx(classes['carousel__pagination-item'], activeCarouselItem === itemIdx ? classes['is-active'] : null)}
            onClick={() => onPaginationItemClick(itemIdx)}
          />
        ))}
      </div>
      {isButtonsVisible ? (
        <>
          <button
            className={clsx(classes['carousel__button'], classes['carousel__button--left'])}
            disabled={activeCarouselItem <= 0}
            onClick={() => onPaginationButtonClick('left')}
          />
          <button
            className={clsx(classes['carousel__button'], classes['carousel__button--right'])}
            disabled={activeCarouselItem >= items.length - 1}
            onClick={() => onPaginationButtonClick('right')}
          />
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
