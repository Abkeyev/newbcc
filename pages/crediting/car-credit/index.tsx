import Layout from "../../../components/Layout";
import React from "react";
import {
  Slider,
  Benefits,
  Order,
  CarCreditCalculator,
  Tabs,
} from "../../../components";
import {
  BccTypography,
  BccCardFull,
} from "../../../components/BccComponents";
import { SliderProps, BenefitsProps, TabsProps, OrderProps } from '../../../interfaces';
import api from '../../../api/Api';
import { NextPageContext } from 'next';

interface CarCreditPageProps {
  slider: SliderProps[];
  
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  order: OrderProps[];
}

const CarCreditPage = (props: CarCreditPageProps) => {
  const { slider, benefits, tabs, order } = props
  return (
    <Layout title="Автокредитование" >
      <div className="main-page">
        <div className="container">
          <Slider slider={slider}  breadcrumbs={[
            {title: "Частным лицам", link: "/", isExternal: false}, 
            {title: "Кредиты", link: "/crediting", isExternal: false},
            {title: "Автокредитование", link: null, isExternal: false}
          ]}/>
          <Benefits benefits={benefits} />
          <CarCreditCalculator />
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

CarCreditPage.getInitialProps = async (ctx: NextPageContext) => {
  let path: any = ctx.pathname
  path = path.split('/')
  path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const benefits = await api.main.getBenefits(path)
  const tabs = await api.main.getTabs(path)
  const order = await api.main.getOrder(path)
  
  return { slider, benefits, tabs, order }
}

export default CarCreditPage;
