import Layout from "../../components/Layout";
import React from "react";
import { Slider, Benefits, Order, News } from "../../components";
import { BccTypography, BccCardFull } from "../../components/BccComponents";

const OpenCurrentAccountPage = () => {
  return (
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <Slider />
          <Benefits/>
          <Order title="Открыть текущий счёт" />
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
                <img style={{ marginRight: 20 }} src={"/img/as.svg"} />
                <img src={"/img/gp.svg"} />
              </>
            }
            bgImg="/img/mobile-app.svg"
          />
          <News />
        </div>
      </div>
    </Layout>
  );
};
export default OpenCurrentAccountPage;
