import React, { useEffect, useRef, useState, CSSProperties, useCallback } from 'react';
import NavItem from './navItem/navItem';
// Functions
// Components

// Styles
import classes from './nav.module.scss';
import textClasses from '../../styles/classes/text.module.scss';
import clsx from 'clsx';
import { isNil } from '../../utils/general';

type Props = {};

const navItems = [
  { id: '#technologies', name: 'Technologies' },
  { id: '#work-experience', name: 'Work experience' },
  { id: '#creative-projects', name: 'Creative projects' },
  { id: '#about-me', name: 'About me' },
  { id: '#contact-me', name: 'Contact me' },
];

const Nav = (props: Props) => {
  const navRef = useRef<HTMLElement>(null);

  const navItemRefs = useRef<Array<HTMLAnchorElement>>([]);

  const [activeNavIdx, setActiveNavIdx] = useState<undefined | number>(undefined);
  const [hoveredNavIdx, setHoveredNavIdx] = useState<undefined | number>(undefined);
  const [hoverItemStyles, setHoverItemStyles] = useState<CSSProperties>({});
  const [activeItemStyles, setActiveItemStyles] = useState<CSSProperties>({});

  const onNavItemHover = useCallback((hoveredIdx: number | undefined) => {
    setHoveredNavIdx(hoveredIdx);
  }, []);

  const onNavItemClick = (activeIdx: number) => {
    console.log('s');
    setActiveNavIdx(activeIdx);
  };

  useEffect(() => {
    if (isNil(hoveredNavIdx) || activeNavIdx === hoveredNavIdx) {
      setHoverItemStyles((hoverItemStyles) => ({ ...hoverItemStyles, opacity: 0 }));
      return;
    }

    const hoveredNavElement = navItemRefs.current[hoveredNavIdx!];

    const hoveredNavElementDimensions = hoveredNavElement.getBoundingClientRect();

    setHoverItemStyles({
      top: hoveredNavElement.offsetTop,
      width: hoveredNavElementDimensions.width,
      height: hoveredNavElementDimensions.height,
      opacity: 1,
    });
  }, [hoveredNavIdx, activeNavIdx]);

  useEffect(() => {
    if (isNil(activeNavIdx)) {
      setActiveItemStyles((activeItemStyles) => ({ ...activeItemStyles, opacity: 0 }));
      return;
    }

    const activeNavElement = navItemRefs.current[activeNavIdx!];

    const activeNavElementDimensions = activeNavElement.getBoundingClientRect();

    const backgroundColor = activeNavElement.getAttribute('data-color') ?? 'white';

    setActiveItemStyles({
      top: activeNavElement.offsetTop,
      width: activeNavElementDimensions.width,
      height: activeNavElementDimensions.height,
      opacity: 1,
    });
  }, [activeNavIdx]);

  return (
    <div className={classes['root']}>
      <a className={clsx(classes['title'])} href='#home'>
        <h1 className={textClasses['title-text']}>Lachlan D&apos;Arcy</h1>
      </a>
      <nav ref={navRef} className={classes['nav']}>
        {navItems.map((item, idx) => (
          <NavItem
            key={item.name}
            ref={(element) => (element ? (navItemRefs.current[idx] = element) : null)}
            index={idx}
            onHover={onNavItemHover}
            onClick={() => onNavItemClick(idx)}
            href={item.id}
          >
            {item.name}
          </NavItem>
        ))}
        <div className={clsx(classes['slider'], classes['slider--hover'])} style={{ ...hoverItemStyles }} />
        <div className={clsx(classes['slider'], classes['slider--active'])} style={{ ...activeItemStyles }} />
      </nav>
    </div>
  );
};

export default Nav;
