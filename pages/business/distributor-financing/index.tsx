import React from "react";
import Layout from "../../../components/Layout";
import { Slider, Benefits, Tabs, Order } from "../../../components";
import api from "../../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, BenefitsProps, TabsProps, OrderProps } from "../../../interfaces";

interface DistributorFinancingPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
  order: OrderProps[];
}

const DistributorFinancingPage = (props: DistributorFinancingPageProps) => {
  const { slider, benefits, tabs, order } = props
  return (
    <Layout title="Финансирование">
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Benefits benefits={benefits}/>
          <Tabs tabs={tabs} />
          <Order order={order} />
        </div>
      </div>
    </Layout>
  );
};

DistributorFinancingPage.getInitialProps = async (ctx: NextPageContext) => {
  let path: any = ctx.pathname
  path = path.split('/')
  path = '/' + path[path.length - 1]
  const slider = await api.main.getSlider(path)
  const benefits = await api.main.getBenefits(path)
  const tabs = await api.main.getTabs(path)
  const order = await api.main.getOrder(path)
  
  return { slider, benefits, tabs, order }
}

export default DistributorFinancingPage;
