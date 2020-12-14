import Layout from "../../../components/Layout";
import React from "react";
import {
  Slider,
  Benefits,
  Order,
  MortgageCalculator,
  Tabs,
} from "../../../components";
import {
  BccTypography,
  BccCardFull
} from "../../../components/BccComponents";
import { SliderProps, CalcProps, BenefitsProps, TabsProps, OrderProps } from '../../../interfaces';
import api from '../../../api/Api';
import { NextPageContext } from 'next';

interface Mortgage72025PageProps {
  slider: SliderProps[];
  calc: CalcProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  order: OrderProps[];
}

const Mortgage72025Page = (props: Mortgage72025PageProps) => {
  const { slider, benefits, tabs, order, calc } = props
  return (
    <Layout title="Ипотека 7-20-25 - Банк ЦентрКредит"
      description="Преимущества: 7% ставка, 20% первоначальный взнос, до 25 млн. тенге. Калькулятор ипотеки, онлайн заявка"
      keywords="ипотека, оформить ипотеку, ипотека 7-20-25, 7-20-25 оформить, ипотека 72025, ипотека 7 20, онлайн 7 20 25">
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: "Частным лицам", link: "/", isExternal: false}, 
              {title: "Ипотека", link: "/mortgage", isExternal: false},
              {title: "Ипотека “7-20-25”", link: null, isExternal: false}
            ]}/>
          <Benefits benefits={benefits} />
          <MortgageCalculator calc={calc} />
          <Order order={order} />
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

Mortgage72025Page.getInitialProps = async (ctx: NextPageContext) => {
  let path: any = ctx.pathname
  path = path.split('/')
  path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const benefits = await api.main.getBenefits(path)
  const tabs = await api.main.getTabs(path)
  const order = await api.main.getOrder(path)
  const calc = await api.main.getCalc(path)
  
  return { slider, benefits, tabs, order, calc }
}

export default Mortgage72025Page;
