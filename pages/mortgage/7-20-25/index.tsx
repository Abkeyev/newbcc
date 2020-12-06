import Layout from "../../../components/Layout";
import React from "react";
import {
  Slider,
  Benefits,
  Order,
  BaspanaCalculator,
  Tabs,
} from "../../../components";
import {
  BccTypography,
  BccCardFull
} from "../../../components/BccComponents";
import { SliderProps, MenuProps, BenefitsProps, TabsProps } from '../../../interfaces';
import api from '../../../api/Api';
import { NextPageContext } from 'next';

interface Mortgage72025PageProps {
  slider: SliderProps[];
  nav: MenuProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
}

const Mortgage72025Page = (props: Mortgage72025PageProps) => {
  const { slider, nav, benefits, tabs } = props
  return (
    <Layout title="Ипотека “7-20-25”" nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: "Частным лицам", link: "/", isExternal: false}, 
              {title: "Ипотека", link: "/mortgage", isExternal: false},
              {title: "Ипотека “7-20-25”", link: null, isExternal: false}
            ]}/>
          <Benefits benefits={benefits} />
          <BaspanaCalculator />
          <Order title="Оформить ипотеку" />
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

Mortgage72025Page.getInitialProps = async (ctx: NextPageContext) => {
  let path: any = ctx.pathname
  path = path.split('/')
  path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path).catch(err => console.error(err))
  const benefits = await api.main.getBenefits(path).catch(err => console.error(err))
  const tabs = await api.main.getTabs(path).catch(err => console.error(err))
  let nav
  if(ctx.req) {
    nav = await api.main.getMenu()
  }else {
    if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
      nav = JSON.parse(localStorage.getItem("menu") || "{}")
    else nav = await api.main.getMenu()
  }
  return { slider, benefits, tabs, nav }
}

export default Mortgage72025Page;
