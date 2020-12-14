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

interface MortgageMilitaryPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  order: OrderProps[];
}

const MortgageMilitaryPage = (props: MortgageMilitaryPageProps) => {
  const { slider, benefits, tabs, order } = props
  return (
    <Layout title="Ипотека для военных" >
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: "Частным лицам", link: "/", isExternal: false}, 
              {title: "Ипотека", link: "/mortgage", isExternal: false},
              {title: "Ипотека для военных", link: null, isExternal: false}
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

MortgageMilitaryPage.getInitialProps = async (ctx: NextPageContext) => {
  let path: any = ctx.pathname
  path = path.split('/')
  path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const benefits = await api.main.getBenefits(path)
  const tabs = await api.main.getTabs(path)
  const order = await api.main.getOrder(path)
  
  return { slider, benefits, tabs, order }
}

export default MortgageMilitaryPage;
