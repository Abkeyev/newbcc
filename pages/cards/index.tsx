import React from "react";
import Layout from "../../components/Layout";
import { Cards, AdditionalInfo, MobileBanking } from '../../components/CardsPage'

const CardsPage = () => {
  return (
    <Layout
      title="Подобрать и заказать карту онлайн - Банк ЦентрКредит"
      description="Сравнить и выбрать карту  ✓ Тарифы, условия обслуживания ✓ Бесплатно заказать карту"
      keywords="карты, оформить карту, банковская карта, онлайн доставка карты, карткарта, заказать карту">
      <div className="main-page">
        <div className="container" style={{ backgroundColor: 'white' }}>
            <Cards/>
            <MobileBanking/>
            <AdditionalInfo/>
        </div>
      </div>
    </Layout>
  );
};

export default CardsPage;
