import Layout from "../../components/Layout";
import React from "react";
import { Slider, Crediting, Calculator, Tabs } from "../../components";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  BccCardFull,
  BccTypography,
  BccButton,
} from "../../components/BccComponents";
import api from '../../api/Api'
import { NextPageContext } from 'next';
import { MenuProps, CardsPageProps, SliderProps, TabsProps } from '../../interfaces'

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

interface CreditingPageProps {
  slider: SliderProps[];
  cards: CardsPageProps;
  tabs: TabsProps[];
  nav: MenuProps[];
}

const CreditingPage = (props: CreditingPageProps) => {
  const { slider, cards, tabs, nav } = props
  const classes = useStyles({});

  return (
    <Layout title="Business" nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[{title: "Частным лицам", link: "/", isExternal: false}, {title: "Кредиты", link: null, isExternal: false}]} />
          <Crediting title="Кредитование частных лиц" cards={cards} />
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
          <Tabs tabs={tabs}/>
        </div>
      </div>
    </Layout>
  );
};

CreditingPage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const cards = await api.main.getCards(ctx.pathname)
  const tabs = await api.main.getTabs(ctx.pathname)
  let nav
  if(ctx.req) {
    nav = await api.main.getMenu()
  }else {
    if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
      nav = JSON.parse(localStorage.getItem("menu") || "{}")
    else nav = await api.main.getMenu()
  }
  return { slider, tabs, cards, nav }
}

export default CreditingPage;
