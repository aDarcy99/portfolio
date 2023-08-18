import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useEffect, useImperativeHandle, useRef } from 'react';
// Styles
import classes from './navItem.module.scss';
import textClasses from '../../../styles/classes/text.module.scss';
import useHover from '../../../utils/hooks/useHover';

interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  onHover: (idx: number | undefined) => void;
  index: number;
}

const NavItem = forwardRef(({ children, onHover, index, href, ...props }: NavItemProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const navItemRef = useRef<HTMLAnchorElement>(null);

  const isHovered = useHover({ ref: navItemRef.current });

  useImperativeHandle(ref, () => navItemRef.current as any);

  useEffect(() => {
    onHover(isHovered ? index : undefined);
  }, [isHovered, index, onHover]);

  return (
    <a {...props} ref={navItemRef} className={clsx(classes['root'], textClasses['paragraph-text'])} href={href}>
      {children}
    </a>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
