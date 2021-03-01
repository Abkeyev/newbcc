import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, BusinessCards, News } from "../../components";
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, NewsProps, CardsPageProps, CardsFullProps } from "../../interfaces";
import { useTranslation } from 'react-i18next';

interface BusinessPageProps {
  slider: SliderProps[];
  news: NewsProps[];
  cards: CardsPageProps;
  cardsFull: CardsFullProps[];
}

const BusinessPage = (props: BusinessPageProps) => {
  const { slider, news, cards, cardsFull } = props
  const { t } = useTranslation();
  return (
    <Layout title={t('btitle')}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Best title={t('best')} cards={cards} />
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
  
  return { slider, news, cards, cardsFull }
}

export default BusinessPage;
