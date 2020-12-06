import Layout from "../../../components/Layout";
import React from "react";
import { Slider, Calculator, Tabs, Benefits } from "../../../components";
import {
  BccCardFull,
  BccTypography
} from "../../../components/BccComponents";
import api from '../../../api/Api'
import { NextPageContext } from 'next'
import { MenuProps, SliderProps, TabsProps, BenefitsProps } from '../../../interfaces'

interface RefinancingPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  nav: MenuProps[];
}

const RefinancingPage = (props: RefinancingPageProps) => {
  const { slider, benefits, tabs, nav } = props
  
  return (
    <Layout title="Рефинансирование кредитов" nav={nav}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: "Частным лицам", link: "/", isExternal: false}, 
              {title: "Кредиты", link: "/crediting", isExternal: false},
              {title: "Рефинансирование кредитов", link: null, isExternal: false}
            ]}/>
          <Benefits benefits={benefits} />
          <Calculator />
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
    let nav
    if(ctx.req) {
        nav = await api.main.getMenu()
    }else {
        if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
        nav = JSON.parse(localStorage.getItem("menu") || "{}")
        else nav = await api.main.getMenu()
    }
    return { slider, tabs, benefits, nav }
}

export default RefinancingPage;
