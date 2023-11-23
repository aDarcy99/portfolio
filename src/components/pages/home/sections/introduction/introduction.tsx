import React, { ForwardedRef, forwardRef } from 'react';

type TIntroductionProps = {};

const Introduction = forwardRef((props: TIntroductionProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref}>
      <p>
        Hey! I&apos;m a <i>self-taught developer</i> looking to make something great.
      </p>
    </section>
  );
});

Introduction.displayName = 'Introduction';

export default Introduction;
