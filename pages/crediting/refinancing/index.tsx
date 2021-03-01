import Layout from "../../../components/Layout";
import React from "react";
import { Slider, Calculator, Tabs, Benefits, Order } from "../../../components";
import {
  BccCardFull,
  BccTypography
} from "../../../components/BccComponents";
import api from '../../../api/Api'
import { NextPageContext } from 'next'
import { SliderProps, TabsProps, BenefitsProps, OrderProps } from '../../../interfaces'
import { useTranslation } from 'react-i18next';

interface RefinancingPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  order: OrderProps[];
}

const RefinancingPage = (props: RefinancingPageProps) => {
  const { slider, benefits, tabs, order } = props
  const { t } = useTranslation();
  
  return (
    <Layout title={t('refcredits')}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: t('chl'), link: "/", isExternal: false}, 
              {title: t('credits'), link: "/crediting", isExternal: false},
              {title: t('refcredits'), link: null, isExternal: false}
            ]}/>
          <Benefits benefits={benefits} />
          <Calculator />
          <Order order={order} />
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
          <Tabs tabs={tabs}/>
        </div>
      </div>
    </Layout>
  );
};

RefinancingPage.getInitialProps = async (ctx: NextPageContext) => {
    let path: any = ctx.pathname
    path = path.split('/')
    path = '/' + path[path.length - 1]
    const slider = await api.main.getSlider(path)
    const benefits = await api.main.getBenefits(path)
    const tabs = await api.main.getTabs(path)
    const order = await api.main.getOrder(path)
    return { slider, tabs, benefits, order }
}

export default RefinancingPage;
