import React from "react";
import Layout from "../../../components/Layout";
import { Slider, Tabs, BaspanaCalculator, Order, Benefits } from "../../../components";
import { BccCardFull, BccTypography } from '../../../components/BccComponents'
import api from "../../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, TabsProps, MenuProps, BenefitsProps, OrderProps } from "../../../interfaces";

interface EtalonPageProps {
  slider: SliderProps[];
  tabs: TabsProps[];
  nav: MenuProps[];
  benefits: BenefitsProps[];
  order: OrderProps[];
}

const EtalonPage = (props: EtalonPageProps) => {
  const { slider, tabs, nav, benefits, order } = props
  return (
    <Layout title="Депозит “Эталон”" nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: "Частным лицам", link: "/", isExternal: false}, 
              {title: "Депозиты", link: "/deposits", isExternal: false},
              {title: "Депозит “Эталон”", link: null, isExternal: false}
            ]}/>
          <Benefits benefits={benefits} />
          <BaspanaCalculator />
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

EtalonPage.getInitialProps = async (ctx: NextPageContext) => {
    let path: any = ctx.pathname
    path = path.split('/')
    path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const tabs = await api.main.getTabs(path)
  const benefits = await api.main.getBenefits(path)
  const order = await api.main.getOrder(path)
  let nav
  if(ctx.req) {
    nav = await api.main.getMenu()
  }else {
    if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
      nav = JSON.parse(localStorage.getItem("menu") || "{}")
    else nav = await api.main.getMenu()
  }
  return { slider, tabs, nav, order, benefits }
}

export default EtalonPage;