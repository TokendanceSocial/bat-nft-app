import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head title='BAT NFT'>
        <link href='https://fonts.googleapis.com/css2?family=Press%20Start%202P' rel='stylesheet' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
