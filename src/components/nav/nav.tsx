import React, { useEffect, useRef, useState, CSSProperties, useCallback } from 'react';
// Functions
import clsx from 'clsx';
import { isNil } from '../../utils/general';
// Components
import NavItem from './navItem/navItem';
// Assets
import FlaskIcon from '../../static/icons/flaskIcon';
import BriefcaseIcon from '../../static/icons/briefcaseIcon';
import PersonIcon from '../../static/icons/personIcon';
import MailIcon from '../../static/icons/socials/mailIcon';
import MonitorIcon from '../../static/icons/monitorIcon';
// Styles
import styles from './nav.module.scss';
import textStyles from '../../styles/text.module.scss';

type Props = {
  currentSection: string;
};

const navItems = [
  { id: '#technologies', name: 'Technologies', icon: <MonitorIcon /> },
  { id: '#work-experience', name: 'Work experience', icon: <BriefcaseIcon /> },
  { id: '#creative-projects', name: 'Creative projects', icon: <FlaskIcon /> },
  // { id: '#about-me', name: 'About me', icon: <PersonIcon /> },
  { id: '#contact-me', name: 'Contact me', icon: <MailIcon /> },
];

const Nav = ({ currentSection }: Props) => {
  const navRef = useRef<HTMLElement>(null);

  const navItemRefs = useRef<Array<{ id: string; element: HTMLAnchorElement }>>([]);

  const [activeItemStyles, setActiveItemStyles] = useState<CSSProperties>({});

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
    const activeNavItem = navItemRefs.current.find((item) => item.id === currentSection);

    if (activeNavItem === undefined) {
      setActiveItemStyles((activeItemStyles) => ({ ...activeItemStyles, opacity: 0 }));
      return;
    }

    const activeNavElement = activeNavItem.element;

    const activeNavElementDimensions = activeNavElement.getBoundingClientRect();

    setActiveItemStyles({
      top: activeNavElement.offsetTop,
      width: activeNavElementDimensions.width,
      height: activeNavElementDimensions.height,
    });
  }, [currentSection]);

  return (
    <div className={styles['root']}>
      <a className={clsx(styles['title-container'])} href='#home'>
        <h1 className={textStyles['title-text']}>Lachlan D&apos;Arcy</h1>
      </a>
      <p className={clsx(styles['subtitle'], textStyles['subtitle-text'])}>Full-stack developer</p>
      <nav ref={navRef} className={styles['nav']}>
        {navItems.map((item, idx) => (
          <NavItem
            key={item.name}
            ref={(element) => (element ? (navItemRefs.current[idx] = { id: item.id, element }) : null)}
            index={idx}
            isActive={currentSection === item.id}
            href={item.id}
          >
            {item.icon}
            {item.name}
          </NavItem>
        ))}
        {/* <div className={clsx(styles['slider'], styles['slider--hover'])} style={{ ...hoverItemStyles }} /> */}
        <div className={clsx(styles['slider'], styles['slider--active'])} style={{ ...activeItemStyles }} />
      </nav>
    </div>
  );
};

export default Nav;
