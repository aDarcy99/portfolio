import React from 'react';
// Functions
import clsx from 'clsx';
// Styles
import classes from './plane.module.scss';

export type TPlaneColorProperty = string;

export type TPlaneDimensionsProperty = {
  height: number;
  width: number;
};

export type TPlanePositionProperty = {
  x: number;
  y: number;
  z: number;
};

export type TPlaneRotationProperty = {
  x: number;
  y: number;
  z: number;
};

export type TPlane = {
  id: string;
  properties: {
    color: '#34eb64';
    dimensions: {
      height: number;
      width: number;
    };
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
  };
};

interface TPlaneProps extends TPlane {
  className?: string;
  isEditing?: boolean;
}

const Plane = ({ className, isEditing, properties }: TPlaneProps) => {
  const { dimensions, position, rotation, color } = properties;

  const { height, width } = dimensions;

  return (
    <div
      className={clsx(classes['root'], isEditing ? classes['is-editing'] : null, className)}
      style={{
        width,
        height,
        backgroundColor: color,
        transform: `translate3d(${position.x}px, ${position.y}px, ${position.z}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
      }}
    />
  );
};

export default Plane;
