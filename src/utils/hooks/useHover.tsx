import React, { ReactHTMLElement, RefObject, useEffect, useState } from 'react';

type useHoverProps = { ref: HTMLElement | null };

const useHover = ({ ref }: useHoverProps) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    if (ref) {
      ref.addEventListener('mouseenter', onMouseEnter);

      ref.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {};
  }, [ref]);

  return isHover;
};

export default useHover;
