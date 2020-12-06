import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, BusinessCards, News } from "../../components";
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, NewsProps, CardsPageProps, CardsFullProps, MenuProps } from "../../interfaces";

interface BusinessPageProps {
  slider: SliderProps[];
  news: NewsProps[];
  cards: CardsPageProps;
  cardsFull: CardsFullProps[];
  nav: MenuProps[];
}

const BusinessPage = (props: BusinessPageProps) => {
  const { slider, news, cards, cardsFull, nav } = props
  return (
    <Layout title="Бизнес клиентам" nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Best title="Лучшее от банка" cards={cards} />
          <BusinessCards cardsFull={cardsFull} />
          <News news={news} />
        </div>
      </div>
    </Layout>
  );
};

BusinessPage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const news = await api.main.getNewsShort()
  const cards = await api.main.getCards(ctx.pathname)
  const cardsFull = await api.main.getCardsFull(ctx.pathname)
  let nav
  if(ctx.req) {
    nav = await api.main.getMenu()
  }else {
    if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
      nav = JSON.parse(localStorage.getItem("menu") || "{}")
    else nav = await api.main.getMenu()
  }
  return { slider, news, cards, cardsFull, nav }
}

export default BusinessPage;
