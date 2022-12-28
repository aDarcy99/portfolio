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
import classes from './header.module.scss';

const Header = ({ ...props }) => {
  return (
    <header className={classes['root']}>
      <Button className={clsx(classes['item'], classes['item-home'])}>
        <HomeIcon color='white' className={clsx(classes['item-icon'])} /> <p className={classes['item-expanded']}>Home</p>
      </Button>
      <Button className={clsx(classes['item'], classes['item-home'])}>
        <PaperPlaneIcon color='white' className={clsx(classes['item-icon'])} /> <p className={classes['item-expanded']}>Projects</p>
      </Button>
    </header>
  );
};

export default Header;
