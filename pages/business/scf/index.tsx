import React from "react";
import Layout from "../../../components/Layout";
import { Slider, Benefits, Order, Tabs } from "../../../components";
import api from "../../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, OrderProps, TabsProps, BenefitsProps } from "../../../interfaces";

interface ScfPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  order: OrderProps[];
  tabs: TabsProps[];
}

const ScfPage = (props: ScfPageProps) => {
  const { slider, benefits, order, tabs } = props
  return (
    <Layout title="Финансирование цепочки поставок">
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Benefits benefits={benefits} />
          <Order order={order}/>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </Layout>
  );
};

ScfPage.getInitialProps = async (ctx: NextPageContext) => {
  let path: any = ctx.pathname
  path = path.split('/')
  path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const benefits = await api.main.getBenefits(path)
  const order = await api.main.getOrder(path)
  const tabs = await api.main.getTabs(path)
  
  return { slider, benefits, order, tabs }
}

export default ScfPage;
