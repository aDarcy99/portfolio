import React, { FunctionComponent, ReactNode, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import classes from './menu.module.scss';

interface MenuProps {
  className?: string;
  children: ReactNode;
  node: ReactNode;
}

const Menu: FunctionComponent<MenuProps> = ({ children, className, node }) => {
  return (
    <span className={clsx(classes['menu__container'])}>
      {node}
      <div className={clsx(classes['menu'], className)}>{children}</div>
    </span>
  );
};

Menu.displayName = 'Menu';

export default Menu;
