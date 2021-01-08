import React from "react";
import Layout from "../../../components/Layout";
import { Slider, Order, Tabs } from "../../../components";
import api from "../../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, OrderProps, TabsProps } from "../../../interfaces";

interface ScfPageProps {
  slider: SliderProps[];
  order: OrderProps[];
  tabs: TabsProps[];
}

const ScfPage = (props: ScfPageProps) => {
  const { slider, order, tabs } = props
  return (
    <Layout title="Финансирование цепочки поставок">
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
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
  const order = await api.main.getOrder(path)
  const tabs = await api.main.getTabs(path)
  
  return { slider, order, tabs }
}

export default ScfPage;
