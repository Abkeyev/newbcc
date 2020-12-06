import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import App from "next/app";
import React from "react";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

type Props = {
  Component: React.Component;
  store: any;
  nav: any[]
};

const progress = new ProgressBar({
  size: 3,
  color: "#27AE60",
  className: "bar-of-progress",
  delay: 100,
});

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

class MyApp extends App<Props> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentNode?.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps}/>
      </MuiThemeProvider>
    );
  }
}

// MyApp.getInitialProps = async ({ ctx: { req } }) => {
//   const nav = await api.main.getMenu()
//   return { ...nav }
// }

export default MyApp;
