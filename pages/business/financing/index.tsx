import React from "react";
import Layout from "../../../components/Layout";
import { Slider, Benefits, Tabs } from "../../../components";
import api from "../../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, BenefitsProps, TabsProps } from "../../../interfaces";

interface FinancingPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  tabs: TabsProps[];
}

const FinancingPage = (props: FinancingPageProps) => {
  const { slider, benefits, tabs } = props
  return (
    <Layout title="Финансирование" >
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Benefits benefits={benefits}/>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </Layout>
  );
};

FinancingPage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const benefits = await api.main.getBenefits(ctx.pathname)
  const tabs = await api.main.getTabs(ctx.pathname)
  
  return { slider, benefits, tabs }
}

export default FinancingPage;
