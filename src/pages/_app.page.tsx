import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
// Functions
// Components
// Styles
import '../styles/Global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.className = 'theme--dark';
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
