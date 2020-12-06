import React from "react";
import Layout from "../components/Layout";
import { Slider, Featured, Widgets, Useful, News } from "../components";
import { BccCardFull, BccTypography } from "../components/BccComponents";
import api from "../api/Api";
import { NextPageContext } from 'next';
import { CardsPageProps, SliderProps, NewsProps, MenuProps } from "../interfaces";

interface IndexPageProps {
  cards: CardsPageProps;
  slider: SliderProps[];
  currency: any;
  news: NewsProps[];
  nav: MenuProps[];
}

const IndexPage = (props: IndexPageProps) => {
  const { cards, slider, currency, news, nav } = props
  console.log(props)
  return (
    <Layout title={'АО "Банк ЦентрКредит"'} nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Featured title="Лучшее от банка" cards={cards} />
          <Widgets currency={currency && currency.Rates} />
          <Useful cards={cards} />
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
          <News news={news} />
        </div>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const cards = await api.main.getCards(ctx.pathname)
  const slider = await api.main.getSlider(ctx.pathname)
  const c = await api.main.getToken()
  const currency = await api.main.getCurrency(c.access_token)
  const news = await api.main.getNewsShort()
  let nav
  if(ctx.req) {
    nav = await api.main.getMenu()
  }else {
    if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
      nav = JSON.parse(localStorage.getItem("menu") || "{}")
    else nav = await api.main.getMenu()
  }
  return { cards, slider, currency, news, nav }
}

export default IndexPage;
