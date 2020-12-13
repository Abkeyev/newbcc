import Layout from "../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccButton,
} from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      img: {
        maxWidth: 350,
        marginBottom: 48,
        margin: '0 auto',
        display: 'block',
      },
      btn: {
        display: 'inline-block',
        marginBottom: 64
      },
      block404: {
        maxWidth: 500,
        margin: '0 auto',
        textAlign: 'center'
      }
    },
    [theme.breakpoints.down("sm")]: {
      img: {
        maxWidth: 350,
        marginBottom: 48,
        margin: '0 auto',
        display: 'block',
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
        padding: '0 12px'
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
  })
);

const Custom404 = () => {
  const classes = useStyles({});

  return (
    <Layout title="Страница не найдена" >
      <div className="main-page">
        <div className="container">
          <div className={classes.block404}>
            <img src="/img/404.svg" className={classes.img} />
            <BccTypography align="center" mb="12px" type="h6" block>Страница не найдена</BccTypography>
            <BccTypography align="center" mb="48px" type="p2l" block>Попробуйте вернуться на предыдущую страницу или перейдите на главную.</BccTypography>
            <BccButton
              variant="contained"
              color="primary"
              className={classes.btn}
              href="/"
            >
              На главную
            </BccButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;