import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
} from "../../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@keyframes spin': {
        '0%': { transform: 'rotate(360deg)' },
        '100%': { transform: 'rotate(0deg)' }
    },
    [theme.breakpoints.between("md", "xl")]: {
      img: {
        maxWidth: 350,
        marginBottom: 48,
        margin: '0 auto',
        display: 'block',
        animation: `$spin 1.3s linear 0s infinite reverse`
      },
      btn: {
        display: 'inline-block',
        marginBottom: 64
      },
      block404: {
        maxWidth: 500,
        margin: '64px auto',
        textAlign: 'center'
      }
    },
    [theme.breakpoints.down("sm")]: {
      img: {
        maxWidth: 350,
        marginBottom: 48,
        margin: '0 auto',
        display: 'block',
        animation: `$spin .5s linear infinite reverse`
      },
      btn: {
        margin: '0 auto',
        marginBottom: 64
      },
      block404: {
        maxWidth: 500,
        margin: '56px auto 0',
        textAlign: 'center'
      }
    },
    [theme.breakpoints.down("xs")]: {
      img: {
        width: '100%',
        padding: '0 12px',
        animation: `$spin .5s linear 0s infinite reverse`
      },
      btn: {
        display: 'block',
        width: 'auto',
        margin: '0 12px 56px'
      },
      block404: {
        width: '100%',
      }
    },
    utmWrap: {
        minHeight: 325
    },
    utmInnter: {
        position: 'absolute',
        overflowY: 'hidden',
        left: 0,
        right: 0,
        top: 0,
        paddingTop: 120,
        minHeight: '100vh',
        bottom: 0,
        zIndex: 999,
        backgroundColor: 'rgba(255,255,255,0.45)'
    }
  })
);

const UTMPage = () => {
  const classes = useStyles({});

  return (
    <div className={classes.utmWrap}>
    <div className={classes.utmInnter}>
        <Layout title="Перенаправление">
        <div className="main-page">
            <div className="container">
            <div className={classes.block404}>
                <img src="/img/loading.svg" className={'spin ' + classes.img} />
                <BccTypography align="center" mb="12px" type="h4" block>Оставайтесь с нами</BccTypography>
                <BccTypography align="center" mb="48px" type="h6" block>Вас перенаправит на другую страницу...</BccTypography>
            </div>
            </div>
        </div>
        </Layout>
    </div>
    </div>
  );
};

export default UTMPage;