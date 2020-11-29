import React from "react";
import Layout from "../components/Layout";
import { Slider, Featured, Widgets, Useful, News } from "../components";
import { BccCardFull, BccTypography } from "../components/BccComponents";
import api from "../api/Api";
import { CardsPageProps } from "../interfaces";

const IndexPage = () => {
  const [cards, setCards] = React.useState<CardsPageProps>();
  React.useEffect(() => {
    api.main.getCards(window.location.pathname).then((res: CardsPageProps) => {
      setCards(res);
    });
  }, []);
  return (
    <Layout title={'АО "Банк ЦентрКредит"'}>
      <div className="main-page">
        <div className="container">
          <Slider />
          <Featured />
          <Widgets />
          <Useful cards={cards} />
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

export default IndexPage;
