import Layout from "../../components/Layout";
import React from "react";
import { Slider, Crediting, Calculator, Tabs } from "../../components";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  BccCardFull,
  BccTypography,
  BccButton,
} from "../../components/BccComponents";
import api from '../../api/Api'
import { NextPageContext } from 'next';
import { CardsPageProps, SliderProps, TabsProps } from '../../interfaces'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto 64px",
      padding: "32px 48px 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
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
      },
    },
    ez: {
      ["@media (max-width:600px)"]: {
        marginBottom: "32px!important",
      },
    },
  })
);

interface CreditingPageProps {
  slider: SliderProps[];
  cards: CardsPageProps;
  tabs: TabsProps[];
  
}

const CreditingPage = (props: CreditingPageProps) => {
  const { slider, cards, tabs } = props
  const { t } = useTranslation();
  const classes = useStyles({});

  return (
    <Layout title={t('crtitle')} keywords={t('crkeywords')}>
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[{title: t('chl'), link: "/", isExternal: false}, {title: t('credits'), link: null, isExternal: false}]} />
          <Crediting title={t('chlcredit')} cards={cards} />
          <BccCardFull
            title={
              <BccTypography block type="h4" className={classes.ezT} mb="16px">
                {t('ref')}
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
                >
                  {t('more')}
                </BccButton>
              </>
            }
            bgImg="/img/ref.svg"
          />
          <Calculator />
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

CreditingPage.getInitialProps = async (ctx: NextPageContext) => {
  const slider = await api.main.getSlider(ctx.pathname)
  const cards = await api.main.getCards(ctx.pathname)
  const tabs = await api.main.getTabs(ctx.pathname)
  
  return { slider, tabs, cards }
}

export default CreditingPage;
