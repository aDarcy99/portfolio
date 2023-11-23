import React from 'react';
import Link from 'next/link';
// Styes
import styles from './footer.module.scss';

const Footer = ({ ...props }) => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__wrapper']}>Footer</div>
    </footer>
  );
};

export default Footer;
