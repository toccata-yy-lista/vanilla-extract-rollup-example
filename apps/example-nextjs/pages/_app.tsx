import { themeClass } from '@vanilla-extract-rollup-example/ui';
import { AppProps } from 'next/app';
import '@vanilla-extract-rollup-example/ui/dist/assets/bundle.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={themeClass}><Component {...pageProps} /></div>;
}

export default MyApp;
