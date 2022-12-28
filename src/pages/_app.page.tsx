import type { AppProps } from 'next/app';
// Functions
// Components
import EditorProvider from './editor/editorContext/editorContext';
// Styles
import '../styles/Global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EditorProvider>
      <Component {...pageProps} />;
    </EditorProvider>
  );
}

export default MyApp;
