import React, { useState } from 'react';
// Functions
import clsx from 'clsx';
// Components
import Link from 'next/link';
import HeaderItem from './headerItem/headerItem';
import Button from '../reusable/button/button';
// Assets
import HomeIcon from '../../static/icons/homeIcon';
import PaperPlaneIcon from '../../static/icons/paperPlaneIcon';
// Styes
import styles from './header.module.scss';

const Header = ({ ...props }) => {
  return (
    <header className={styles['root']}>
      <Button className={clsx(styles['item'], styles['item-home'])}>
        <HomeIcon color='white' className={clsx(styles['item-icon'])} /> <p className={styles['item-expanded']}>Home</p>
      </Button>
      <Button className={clsx(styles['item'], styles['item-projects'])}>
        <PaperPlaneIcon color='white' className={clsx(styles['item-icon'])} /> <p className={styles['item-expanded']}>Projects</p>
      </Button>
      <Button className={clsx(styles['item'], styles['item-about-me'])}>
        <PaperPlaneIcon color='white' className={clsx(styles['item-icon'])} /> <p className={styles['item-expanded']}>About me</p>
      </Button>
      <Button className={clsx(styles['item'], styles['item-get-in-touch'])}>
        <PaperPlaneIcon color='white' className={clsx(styles['item-icon'])} /> <p className={styles['item-expanded']}>Get in touch</p>
      </Button>
    </header>
  );
};

export default Header;
