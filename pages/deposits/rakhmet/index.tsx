import React from "react";
import Layout from "../../../components/Layout";
import { Slider, Tabs, Order, Benefits } from "../../../components";
import { BccCardFull, BccTypography } from '../../../components/BccComponents'
import api from "../../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, TabsProps, BenefitsProps, OrderProps } from "../../../interfaces";
import { useTranslation } from 'react-i18next';

interface RakhmetPageProps {
  slider: SliderProps[];
  tabs: TabsProps[];
  benefits: BenefitsProps[];
  order: OrderProps[];
}

const RakhmetPage = (props: RakhmetPageProps) => {
  const { slider, order, tabs, benefits } = props
  const { t } = useTranslation();
  return (
    <Layout title="Депозит “Рахмет”" >
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: t('chl'), link: "/", isExternal: false}, 
              {title: t('deposits'), link: "/deposits", isExternal: false},
              {title: "Депозит “Рахмет”", link: null, isExternal: false}
            ]}/>
          <Benefits benefits={benefits} />
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

RakhmetPage.getInitialProps = async (ctx: NextPageContext) => {
    let path: any = ctx.pathname
    path = path.split('/')
    path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const tabs = await api.main.getTabs(path)
  const benefits = await api.main.getBenefits(path)
  const order = await api.main.getOrder(path)
  
  return { slider, tabs, benefits, order }
}

export default RakhmetPage;
