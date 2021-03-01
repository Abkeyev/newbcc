import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, Benefits, Tabs } from "../../components";
import { BccCardFull, BccTypography } from '../../components/BccComponents'
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, TabsProps, CardsPageProps, BenefitsProps } from "../../interfaces";
import { useTranslation } from 'react-i18next';

interface BusinessPageProps {
  slider: SliderProps[];
  benefits: BenefitsProps[];
  cards: CardsPageProps;
  tabs: TabsProps[];
  
}

const DepositesPage = (props: BusinessPageProps) => {
  const { slider, tabs, cards, benefits } = props
  const { t } = useTranslation();
  return (
    <Layout
      title={`${t('deposits')} ${'bcct'}`}
      description={t('ddesc')}
      keywords={t('dkeywords')}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} />
          <Best title={t('deposits')} cards={cards} />
          <Benefits benefits={benefits} />
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

DepositesPage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const cards = await api.main.getCards(ctx.pathname)
  const benefits = await api.main.getBenefits(ctx.pathname)
  const tabs = await api.main.getTabs(ctx.pathname)
  
  return { slider, cards, benefits, tabs }
}

export default DepositesPage;
