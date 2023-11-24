import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useEffect, useImperativeHandle, useRef } from 'react';
// Styles
import styles from './navItem.module.scss';
import textStyles from '../../../styles/text.module.scss';
import useHover from '../../../utils/hooks/useHover';

interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  onHover?: (idx: number | undefined) => void;
  index: number;
  isActive: boolean;
}

const NavItem = forwardRef(({ children, onHover, isActive, index, href, ...props }: NavItemProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const navItemRef = useRef<HTMLAnchorElement>(null);

  const isHovered = useHover({ ref: navItemRef.current });

  useImperativeHandle(ref, () => navItemRef.current as any);

  useEffect(() => {
    if (onHover) {
      onHover(isHovered ? index : undefined);
    }
  }, [isHovered, index, onHover]);

  return (
    <a {...props} ref={navItemRef} className={clsx(styles['root'], textStyles['paragraph-text'], isActive && styles['is-active'])} href={href}>
      {children}
    </a>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
