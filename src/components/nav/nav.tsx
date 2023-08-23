import React, { useEffect, useRef, useState, CSSProperties, useCallback } from 'react';
// Functions
import clsx from 'clsx';
import { isNil } from '../../utils/general';
// Components
import NavItem from './navItem/navItem';
// Assets
import FlaskIcon from '../../static/icons/flaskIcon';
import BriefcaseIcon from '../../static/icons/briefcaseIcon';
import PersonIcon from '../../static/icons/PersonIcon';
import MailIcon from '../../static/icons/socials/mailIcon';
import MonitorIcon from '../../static/icons/monitorIcon';
// Styles
import classes from './nav.module.scss';
import textClasses from '../../styles/classes/text.module.scss';

type Props = {};

const navItems = [
  { id: '#technologies', name: 'Technologies', icon: <MonitorIcon /> },
  { id: '#work-experience', name: 'Work experience', icon: <BriefcaseIcon /> },
  { id: '#creative-projects', name: 'Creative projects', icon: <FlaskIcon /> },
  { id: '#about-me', name: 'About me', icon: <PersonIcon /> },
  { id: '#contact-me', name: 'Contact me', icon: <MailIcon /> },
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
    setActiveNavIdx(activeIdx);
  };

  // NOTE: removed on hover affect for now
  // useEffect(() => {
  //   if (isNil(hoveredNavIdx) || activeNavIdx === hoveredNavIdx) {
  //     setHoverItemStyles((hoverItemStyles) => ({ ...hoverItemStyles, opacity: 0 }));
  //     return;
  //   }

  //   const hoveredNavElement = navItemRefs.current[hoveredNavIdx!];

  //   const hoveredNavElementDimensions = hoveredNavElement.getBoundingClientRect();

  //   setHoverItemStyles({
  //     top: hoveredNavElement.offsetTop - 5 + hoveredNavElementDimensions.height / 2,
  //     opacity: 1,
  //   });
  // }, [hoveredNavIdx, activeNavIdx]);

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
      {/* <p>Full-stack developer</p> */}
      <nav ref={navRef} className={classes['nav']}>
        {navItems.map((item, idx) => (
          <NavItem
            key={item.name}
            ref={(element) => (element ? (navItemRefs.current[idx] = element) : null)}
            index={idx}
            isActive={activeNavIdx === idx}
            onHover={onNavItemHover}
            onClick={() => onNavItemClick(idx)}
            href={item.id}
          >
            {item.icon}
            <p>{item.name}</p>
          </NavItem>
        ))}
        {/* <div className={clsx(classes['slider'], classes['slider--hover'])} style={{ ...hoverItemStyles }} /> */}
        <div className={clsx(classes['slider'], classes['slider--active'])} style={{ ...activeItemStyles }} />
      </nav>
    </div>
  );
};

export default Nav;
