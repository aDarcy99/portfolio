import React, { ForwardedRef, forwardRef } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import textStyles from '../../../../../styles/text.module.scss';
import styles from './contactMe.module.scss';
import Button from '../../../../reusable/button/button';
import { GithubIcon } from '../../../../../static/icons/technologies';
import LinkedInIcon from '../../../../../static/icons/socials/linkedInIcon';
import MailIcon from '../../../../../static/icons/socials/mailIcon';
import Tag from '../../../../reusable/tag/tag';

type Props = {};

const ContactMe = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref}>
      <h2 id='contact-me' className={clsx(textStyles['heading'], styles['heading'])}>
        Contact me
      </h2>
      <p className={styles['paragraph']}>If you&apos;re interested in working together, consider contacting me through one of these platforms!</p>
      <div className={styles['tag-container']}>
        <a href='mailto:darcylachlan@hotmail.com.au' target='_blank' rel='noreferrer' className={styles['tag-wrapper']}>
          <Tag className={styles['tag']}>
            <MailIcon />
            Email
          </Tag>
        </a>
        <a href='https://www.linkedin.com/in/lachlan-d-arcy-161241208/' target='_blank' rel='noreferrer' className={styles['tag-wrapper']}>
          <Tag className={styles['tag']}>
            <LinkedInIcon />
            LinkedIn
          </Tag>
        </a>
        <a href='https://github.com/aDarcy99' target='_blank' rel='noreferrer' className={styles['tag-wrapper']}>
          <Tag className={styles['tag']}>
            <GithubIcon />
            Github
          </Tag>
        </a>
      </div>
    </section>
  );
});

ContactMe.displayName = 'ContactMe';

export default ContactMe;
