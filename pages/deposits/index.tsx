import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, BaspanaCalculator, Benefits, Tabs } from "../../components";
import { BccCardFull, BccTypography } from '../../components/BccComponents'
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, TabsProps, CardsPageProps, BenefitsProps, MenuProps } from "../../interfaces";

interface BusinessPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  cards: CardsPageProps;
  tabs: TabsProps[];
  nav: MenuProps[];
}

const DepositesPage = (props: BusinessPageProps) => {
  const { slider, tabs, cards, benefits, nav } = props
  return (
    <Layout title="Депозиты" nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Best title="Депозиты" cards={cards} />
          <BaspanaCalculator />
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
                <img style={{ marginRight: 20 }} src={"/img/as.svg"} />
                <img src={"/img/gp.svg"} />
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
  let nav
  if(ctx.req) {
    nav = await api.main.getMenu()
  }else {
    if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
      nav = JSON.parse(localStorage.getItem("menu") || "{}")
    else nav = await api.main.getMenu()
  }
  return { slider, cards, benefits, tabs, nav }
}

export default DepositesPage;
