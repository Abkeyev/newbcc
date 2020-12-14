import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, Benefits, Tabs } from "../../components";
import { BccCardFull, BccTypography } from '../../components/BccComponents'
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, TabsProps, CardsPageProps, BenefitsProps } from "../../interfaces";

interface BusinessPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  cards: CardsPageProps;
  tabs: TabsProps[];
  
}

const DepositesPage = (props: BusinessPageProps) => {
  const { slider, tabs, cards, benefits } = props
  return (
    <Layout
      title="Депозиты - Банк ЦентрКредит"
      description="Открыть депозит на любую сумму онлайн. Казахстанский фонд гарантирования депозитов – государственная гарантия банковских сбережений"
      keywords="депозиты, онлайн депозит, открыт депозиты, депозиты застрахованные, открыть депозит, выгодные ставки по депозитам" >
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Best title="Депозиты" cards={cards} />
          <Benefits benefits={benefits} />
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
          <Tabs tabs={tabs} />
        </div>
      </div>
    </Layout>
  );
};

DepositesPage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const cards = await api.main.getCards(ctx.pathname)
  const benefits = await api.main.getBenefits(ctx.pathname)
  const tabs = await api.main.getTabs(ctx.pathname)
  
  return { slider, cards, benefits, tabs }
}

export default DepositesPage;
