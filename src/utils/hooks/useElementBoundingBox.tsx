import React, { useState, useEffect, RefObject } from 'react';

type Props = {
  ref: RefObject<HTMLElement>;
};

type TBounding = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

const useElementBoundingBox = ({ ref }: Props) => {
  const [bounding, setBounding] = useState<TBounding>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateBounding = () => {
      if (ref.current) {
        setBounding(ref.current.getBoundingClientRect());
      }
    };

    updateBounding();
    window.addEventListener('resize', updateBounding);
    window.addEventListener('scroll', updateBounding);

    return () => {
      window.removeEventListener('resize', updateBounding);
      window.removeEventListener('scroll', updateBounding);
    };
  }, [ref]);

  return bounding;
};

export default useElementBoundingBox;
