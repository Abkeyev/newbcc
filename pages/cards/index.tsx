import React from "react";
import Layout from "../../components/Layout";
import { Cards, AdditionalInfo, MobileBanking } from '../../components/CardsPage'

const CardsPage = () => {
  return (
    <Layout title="Платежные карты" >
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
