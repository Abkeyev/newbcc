import React, { ReactNode } from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { MenuProps } from '../interfaces';

type Props = {
  children?: ReactNode;
  title?: string;
  nav: MenuProps[];
};

const Layout = ({ children, title = "This is the default title", nav }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/fonts/style.css" rel="stylesheet" />
    </Head>
    <Navigation nav={nav} />
    {children}
    <Footer />
  </>
);

export default Layout;
