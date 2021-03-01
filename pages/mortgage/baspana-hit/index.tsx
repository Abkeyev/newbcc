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
import { useTranslation } from 'react-i18next';

interface BaspanaHitPageProps {
  slider: SliderProps[];
  calc: CalcProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  order: OrderProps[];
}

const BaspanaHitPage = (props: BaspanaHitPageProps) => {
  const { slider, benefits, tabs, order, calc } = props
  const { t } = useTranslation();
  return (
    <Layout 
      title={`${t('bhmort')} - ${t('bcct')}`}
      description={t('bhmortdesc')}
      keywords={t('bhmortkeywords')}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider}
           breadcrumbs={[
            {title: t('chl'), link: "/", isExternal: false}, 
            {title: t('mortgage'), link: "/mortgage", isExternal: false},
            {title: t('bhmort'), link: null, isExternal: false}
          ]}/>
          <Benefits benefits={benefits} />
          <MortgageCalculator calc={calc} />
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
          <Tabs tabs={tabs} />
        </div>
      </div>
    </Layout>
  );
};

BaspanaHitPage.getInitialProps = async (ctx: NextPageContext) => {
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

export default BaspanaHitPage;
