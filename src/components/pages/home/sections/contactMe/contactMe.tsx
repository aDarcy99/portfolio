import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import textStyles from '../../../../../styles/text.module.scss';
import styles from './contactMe.module.scss';

type Props = {};

const ContactMe = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref}>
      <h2 id='contact-me' className={clsx(textStyles['heading-text'], styles['heading'])}>
        Contact me
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc tempor, eleifend leo ac, maximus elit. Donec rutrum, nulla at varius venenatis, nisl
        sapien aliquet leo, venenatis viverra eros mauris eget turpis.
      </p>
    </section>
  );
});

ContactMe.displayName = 'ContactMe';

export default ContactMe;
