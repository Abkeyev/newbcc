import Layout from "../../components/Layout";
import React from "react";
import {
  Slider,
  Benefits,
  Order,
  CarCreditCalculator,
  Tabs,
} from "../../components";
import {
  BccTypography,
  BccCardFull,
} from "../../components/BccComponents";

const CarCreditPage = () => {
  return (
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <Slider breadcrumbs={[{title: "Частным лицам", link: "/", isExternal: false}, {title: "Кредиты", link: "/crediting", isExternal: false}]} />
          <Benefits/>
          <CarCreditCalculator />
          <Order title="Оставьте заявку на автокредит" />

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
          <Tabs />
        </div>
      </div>
    </Layout>
  );
};
export default CarCreditPage;
