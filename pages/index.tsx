import React from "react";
import Layout from "../components/Layout";
import { Slider, Featured, Widgets, Useful, News } from "../components";
import { BccCardFull, BccTypography } from "../components/BccComponents";
import api from "../api/Api";
import { NextPageContext } from 'next';
import { CardsPageProps, SliderProps, NewsProps } from "../interfaces";

interface IndexPageProps {
  cards: CardsPageProps;
  slider: SliderProps[];
  currency: any;
  news: NewsProps[];
}

const IndexPage = (props: IndexPageProps) => {
  const { cards, slider, currency, news } = props
  return (
    <Layout 
      title={'Банк ЦентрКредит — Кредиты, депозиты и карты'}
      description="Оставить онлайн заявку на кредит, карты, ипотеку, открытие депозита и другие услуги для физических лиц"
      keywords="Бцк, bcc, онлайн банк, лучший банк, кредит, оформить кредит, кредит онлайн, кредитная карта, оформить кредитную карту, кредитная карта по интернету, кредитная карта онлайн, кредит наличными, кредит наличными онлайн, дебетовая карта, перевод с карты на карту">
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
                <img style={{ marginRight: 20 }} src={"/img/as.svg"} alt="Приложение BCC.kz в AppStore"/>
                <img src={"/img/gp.svg"} alt="Приложение BCC.kz в GooglePlay"/>
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
  
  return { cards, slider, currency, news }
}

export default IndexPage;
