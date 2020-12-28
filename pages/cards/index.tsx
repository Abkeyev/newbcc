import React from "react";
import Layout from "../../components/Layout";
import { Cards, AdditionalInfo } from '../../components/CardsPage'
import { BccCardFull, BccTypography } from '../../components/BccComponents'

const CardsPage = () => {
  return (
    <Layout
      title="Подобрать и заказать карту онлайн - Банк ЦентрКредит"
      description="Сравнить и выбрать карту  ✓ Тарифы, условия обслуживания ✓ Бесплатно заказать карту"
      keywords="карты, оформить карту, банковская карта, онлайн доставка карты, карткарта, заказать карту">
      <div className="main-page">
        <div className="container" style={{ backgroundColor: 'white' }}>
            <Cards/>
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
                  <img style={{ marginRight: 20 }} src={"/img/as.svg"} alt="Приложение BCC.kz в AppStore"/>
                  <img src={"/img/gp.svg"} alt="Приложение BCC.kz в GooglePlay"/>
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
