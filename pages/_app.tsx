import "tailwindcss/tailwind.css";
import type { AppProps } from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJapanese = Noto_Sans_JP({
  weight: '400',
  preload: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansJapanese.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
