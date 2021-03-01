import React from "react";
import Layout from "../components/Layout";
import { Slider, Featured, Widgets, Useful, News } from "../components";
import { BccCardFull, BccTypography } from "../components/BccComponents";
import api from "../api/Api";
import { NextPageContext } from 'next';
import { CardsPageProps, SliderProps, NewsProps } from "../interfaces";
import { useTranslation } from 'react-i18next';

interface IndexPageProps {
  cards: CardsPageProps;
  slider: SliderProps[];
  currency: any;
  news: NewsProps[];
}

const IndexPage = (props: IndexPageProps) => {
  const { cards, slider, currency, news } = props
  const { t } = useTranslation();
  return (
    <Layout 
      title={t('title')}
      description={t('desc')}
      keywords={t('keywords')}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Featured title={t('best')} cards={cards} />
          <Widgets currency={currency && currency.Rates} />
          <Useful cards={cards} />
          <BccCardFull
            chips={[
              {
                title: t('mb'),
                type: "outlined",
                color: "secondary",
              },
            ]}
            title="BCC.KZ"
            text={
              <>
                <BccTypography align="left" block type="p2" mb="32px">
                  {t('mbt')}
                </BccTypography>
                <img style={{ marginRight: 20 }} src={"/img/as.svg"} alt="AppStore"/>
                <img src={"/img/gp.svg"} alt="GooglePlay"/>
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
  const cards = await api.main.getCards(ctx.pathname).catch((err) => console.error(err))
  const slider = await api.main.getSlider(ctx.pathname).catch((err) => console.error(err))
  const c = await api.main.getToken()
  const currency = await api.main.getCurrency(c.access_token)
  const news = await api.main.getNewsShort().catch((err) => console.error(err))
  
  return { cards, slider, currency, news }
}

export default IndexPage;
