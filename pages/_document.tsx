import { ServerStyleSheets } from "@material-ui/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import flush from "styled-jsx/server";
import { AppContext } from "../components/AppContext";

type Props = {
  pageProps: any;
};

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: AppContext): Promise<any> => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    const pageProps = ctx;

    return {
      ...initialProps,
      pageProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      ),
    };
  };

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-22343418-19"/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-22343418-19');            
              `,
            }}
          />
          <script 
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(70060267, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true,
                      ecommerce:"dataLayer"
                })`
          }}/>
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TTLNDZW')`
          }} />
        </Head>
        <body>
          <noscript>
            <div>
              <img src="https://mc.yandex.ru/watch/70060267" style={{ position: 'absolute', left: -9999}} alt="" />
            </div>
          </noscript>
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-TTLNDZW" height="0" width="0"
              style={{ display: 'none',
              visibility:'hidden'}}>
            </iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
