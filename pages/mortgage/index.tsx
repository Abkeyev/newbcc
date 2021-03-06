import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, Tabs } from "../../components";
import { BccCardFullImg, BccTypography, BccButton, BccCardFull } from '../../components/BccComponents'
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { SliderProps, NewsProps, CardsPageProps, TabsProps } from "../../interfaces";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() =>
  createStyles({
    readMore: {
      margin: "auto",
      minWidth: 300,
      width: "max-content",
      ["@media (max-width:600px)"]: {
        display: "block",
      },
    },
    as: {
      marginRight: 20,
    },
    ezT: {
      ["@media (max-width:600px)"]: {
        textAlign: "center",
        textTransform: 'none'
      },
    },
    ez: {
      ["@media (max-width:600px)"]: {
        marginBottom: "32px!important",
      },
    },
  })
);

interface BusinessPageProps {
  slider: SliderProps[];
  news: NewsProps[];
  cards: CardsPageProps;
  
  tabs: TabsProps[];
}

const MortgagePage = (props: BusinessPageProps) => {
  const { slider, tabs, cards } = props
  const { t } = useTranslation();
  
  const classes = useStyles({});
  return (
    <Layout title={t('mortgage')} >
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
            {title: t('chl'), link: "/", isExternal: false}, 
            {title: t('mortgage'), link: null, isExternal: false}
          ]} />
          <Best title={t('programs')} cards={cards} />
          <BccCardFullImg
            title={
              <BccTypography block type="h4" className={classes.ezT} mb="16px">
                {t('refmort')}
              </BccTypography>
            }
            text={
              <>
                <BccTypography block type="p2" className={classes.ez} mb="65px">
                  {t('refcond')}
                </BccTypography>
                <BccButton
                  variant="outlined"
                  color="secondary"
                  className={classes.readMore}
                  href="https://www.bcc.kz/product/the-state-program-for-refinancing-of-mortgage-loans/"
                >
                  {t('more')}
                </BccButton>
              </>
            }
          />
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
          <Tabs tabs={tabs}/>
        </div>
      </div>
    </Layout>
  );
};

MortgagePage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const news = await api.main.getNewsShort()
  const cards = await api.main.getCards(ctx.pathname)
  const tabs = await api.main.getTabs(ctx.pathname)
  
  return { slider, news, cards, tabs }
}

export default MortgagePage;
