import Layout from "../../components/Layout";
import React from "react";
import { Slider, Crediting, Calculator, Tabs } from "../../components";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  BccCardFull,
  BccTypography,
  BccButton,
} from "../../components/BccComponents";

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto 64px",
      padding: "32px 48px 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
    readMore: {
      margin: "auto",
      minWidth: 300,
      width: "max-content",
      ["@media (max-width:600px)"]: {
        display: "block",
      },
    },
    as: {
      marginRight: 20,
    },
    ezT: {
      ["@media (max-width:600px)"]: {
        textAlign: "center",
      },
    },
    ez: {
      ["@media (max-width:600px)"]: {
        marginBottom: "32px!important",
      },
    },
  })
);

const CreditingPage = () => {
  const classes = useStyles({});

  return (
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <Slider />
          <Crediting />
          <BccCardFull
            title={
              <BccTypography block type="h4" className={classes.ezT} mb="16px">
                Рефинансирование кредитных займов
              </BccTypography>
            }
            text={
              <>
                <BccTypography block type="p2" className={classes.ez} mb="65px">
                  Смягчим условия кредитов любых банков
                </BccTypography>
                <BccButton
                  variant="outlined"
                  color="secondary"
                  className={classes.readMore}
                >
                  Подробнее
                </BccButton>
              </>
            }
            bgImg="/img/ref.svg"
          />
          <Calculator />
          <BccCardFull
            chips={[
              {
                title: "Мобильный банкинг",
                type: "outlined",
                color: "secondary",
              },
            ]}
            title="BCC.KZ"
            text={
              <>
                <BccTypography align="left" block type="p2" mb="32px">
                  Управляй банковскими счетами онлайн через браузер или
                  приложение
                </BccTypography>
                <img style={{ marginRight: 20 }} src={"/img/as.svg"} />
                <img src={"/img/gp.svg"} />
              </>
            }
            bgImg="/img/mobile-app.svg"
          />
          <Tabs/>
        </div>
      </div>
    </Layout>
  );
};
export default CreditingPage;
