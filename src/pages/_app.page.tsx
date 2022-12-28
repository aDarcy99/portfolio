import type { AppProps } from 'next/app';
// Functions
// Styles
import '../styles/Global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
