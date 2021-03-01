import React from "react";
import Layout from "../../components/Layout";
import { Cards, AdditionalInfo } from '../../components/CardsPage'
import { BccCardFull, BccTypography } from '../../components/BccComponents'
import { useTranslation } from 'react-i18next';

const CardsPage = () => {
  const { t } = useTranslation();
  return (
    <Layout
      title={t('ctitle')}
      description={t('cdesc')}
      keywords={t('ckeywords')}>
      <div className="main-page">
        <div className="container" style={{ backgroundColor: 'white' }}>
            <Cards/>
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
            <AdditionalInfo/>
        </div>
      </div>
    </Layout>
  );
};

export default CardsPage;
