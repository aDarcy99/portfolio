import React from 'react';
import Link from 'next/link';
// Styes
import classes from './footer.module.scss';

const Footer = ({ ...props }) => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer__wrapper']}>Footer</div>
    </footer>
  );
};

export default Footer;
