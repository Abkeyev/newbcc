import React from "react";
import Layout from "../../components/Layout";
import { Slider, Best, BusinessCards, News } from "../../components";

const BusinessPage = () => {
  return (
    <Layout title="Бизнес клиентам">
      <div className="main-page">
        <div className="container">
          <Slider />
          <Best />
          <BusinessCards/>
          <News />
        </div>
      </div>
    </Layout>
  );
};

export default BusinessPage;
