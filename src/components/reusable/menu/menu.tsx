import React, { FunctionComponent, ReactNode, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import styles from './menu.module.scss';

interface MenuProps {
  className?: string;
  children: ReactNode;
  node: ReactNode;
}

const Menu: FunctionComponent<MenuProps> = ({ children, className, node }) => {
  return (
    <span className={clsx(styles['menu__container'])}>
      {node}
      <div className={clsx(styles['menu'], className)}>{children}</div>
    </span>
  );
};

Menu.displayName = 'Menu';

export default Menu;
