import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, BaspanaCalculator, Tabs } from "../../components";
import { BccCardFullImg, BccTypography, BccButton, BccCardFull } from '../../components/BccComponents'
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, NewsProps, CardsPageProps, TabsProps, MenuProps } from "../../interfaces";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
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
        textTransform: 'none'
      },
    },
    ez: {
      ["@media (max-width:600px)"]: {
        marginBottom: "32px!important",
      },
    },
  })
);

interface BusinessPageProps {
  slider: SliderProps[];
  news: NewsProps[];
  cards: CardsPageProps;
  nav: MenuProps[];
  tabs: TabsProps[];
}

const MortgagePage = (props: BusinessPageProps) => {
  const { slider, tabs, cards, nav } = props

  console.log(slider)
  const classes = useStyles({});
  return (
    <Layout title="Ипотека" nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
            {title: "Частным лицам", link: "/", isExternal: false}, 
            {title: "Ипотека", link: null, isExternal: false}
          ]} />
          <Best title="Программы" cards={cards} />
          <BccCardFullImg
            title={
              <BccTypography block type="h4" className={classes.ezT} mb="16px">
                Рефинансирование ипотечных займов
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
          />
          <BaspanaCalculator />
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

MortgagePage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const news = await api.main.getNewsShort()
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
  return { slider, news, cards, nav, tabs }
}

export default MortgagePage;
