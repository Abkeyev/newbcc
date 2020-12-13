import Layout from "../../../components/Layout";
import React from "react";
import {
  Slider,
  Benefits,
  Order,
  Tabs,
} from "../../../components";
import {
  BccTypography,
  BccCardFull
} from "../../../components/BccComponents";
import { SliderProps, BenefitsProps, TabsProps, OrderProps } from '../../../interfaces';
import api from '../../../api/Api';
import { NextPageContext } from 'next';

interface MortgageOrdaPageProps {
  slider: SliderProps[];
  
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  order: OrderProps[];
}

const MortgageOrdaPage = (props: MortgageOrdaPageProps) => {
  const { slider, benefits, tabs, order } = props
  return (
    <Layout title="Ипотека “Орда”" >
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: "Частным лицам", link: "/", isExternal: false}, 
              {title: "Ипотека", link: "/mortgage", isExternal: false},
              {title: "Ипотека “Орда”", link: null, isExternal: false}
            ]}/>
          <Benefits benefits={benefits} />
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

MortgageOrdaPage.getInitialProps = async (ctx: NextPageContext) => {
  let path: any = ctx.pathname
  path = path.split('/')
  path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const benefits = await api.main.getBenefits(path)
  const tabs = await api.main.getTabs(path)
  const order = await api.main.getOrder(path)
  
  return { slider, benefits, tabs, order }
}

export default MortgageOrdaPage;
