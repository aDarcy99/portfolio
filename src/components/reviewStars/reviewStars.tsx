import clsx from 'clsx';
import React from 'react';
// Assets
import EmptyStarsIcon from '../../static/icons/emptyStarIcon';
import FullStarsIcon from '../../static/icons/fullStarsIcon';
// Styles
import classes from './reviewStars.module.scss';

interface ReviewStarsProps {
  percentage: number;
  starsCount?: number;
  className?: string;
}

const ReviewStars = ({ className, percentage, starsCount = 5 }: ReviewStarsProps) => {
  const starsArray = Array(starsCount)
    .fill(0)
    .map((_, idx) => idx + 1);

  const getStarWidth = (idx: number) => {
    let result = 0;
    const singleStarValue = 100 / starsCount;
    const idxStarValue = singleStarValue * (idx + 1);
    const currentStarValue = Math.abs(percentage - idxStarValue);

    if (percentage > idxStarValue) {
      result = 100;
    } else {
      if (currentStarValue > singleStarValue) {
        result = 0;
      } else {
        result = 100 - (currentStarValue / singleStarValue) * 100;
      }
    }

    return `${result}%`;
  };

  return (
    <div className={clsx(classes['stars'], className)}>
      <div className={classes['stars__empty']}>
        {starsArray.map((star) => (
          <div className={clsx(classes['star'], classes['star--empty'])} key={star}>
            <EmptyStarsIcon key={star} />
          </div>
        ))}
      </div>
      <div className={classes['stars__full']}>
        {starsArray.map((star, idx) => (
          <div className={clsx(classes['star'], classes['star--full'])} key={star}>
            <FullStarsIcon style={{ width: getStarWidth(idx) }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewStars;
