import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import App, { AppContext, AppProps } from "next/app";
import Router, { useRouter } from "next/router"
import React from "react";
import ProgressBar from "@badrap/bar-of-progress";
import { MenuProps, FooterProps } from "../interfaces";
import { Navigation, Footer } from "../components";
import ReactGA from "react-ga";
import api from "../api/Api";
import '../i18n';
import i18n from "../i18n";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const progress = new ProgressBar({
  size: 3,
  color: "#00A755",
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
    
ReactGA.initialize("UA-22343418-19");

function MyApp({Component, pageProps}: AppProps) {
  const [navi, setNavi] = React.useState<MenuProps[] | []>([])
  const [footer, setFooter] = React.useState<FooterProps[] | []>([])
  const router = useRouter();
  React.useEffect(() => {
    console.log(window.location.pathname)
    if(window.location.pathname.substr(0,6) === "/utm/~") {
        api.main.getUTMLink(window.location.pathname.substr(6)).then(r => {
          if(r !== 'not found') {
            console.log(r)
            router.replace(`${r.link}${r.id ? '@'+r.id : ''}`)}
          else router.replace(`/404`)
        }).catch(() => router.replace(`/404`))
    }
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentNode?.removeChild(jssStyles);

    if(cookies.get('lang')) i18n.changeLanguage(cookies.get('lang'))
    else cookies.set('lang', 'ru')
    
    if(Object.keys(JSON.parse(sessionStorage.getItem("menu") || "{}")).length > 0 && cookies.get('lang') === 'ru'){
      setNavi(JSON.parse(sessionStorage.getItem("menu") || "{}"))
    }else {
      api.main.getMenu().then(r => {
        sessionStorage.setItem('menu', JSON.stringify(r))
        setNavi(r)
      }).catch(err => console.error(err))
    }
    if(Object.keys(JSON.parse(sessionStorage.getItem("footer") || "{}")).length > 0 && cookies.get('lang') === 'ru'){
      setFooter(JSON.parse(sessionStorage.getItem("footer") || "{}"))
    }else {
      api.main.getFooter().then(r => {
        sessionStorage.setItem('footer', JSON.stringify(r))
        setFooter(r)
      }).catch(err => console.error(err))
    }
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation nav={navi} />
      <Component {...pageProps}/>
      <Footer footer={footer}/>
    </MuiThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp;
