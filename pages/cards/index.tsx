import React from "react";
import Layout from "../../components/Layout";
import { Cards, AdditionalInfo, MobileBanking } from '../../components/CardsPage'
import api from "../../api/Api";
import { NextPageContext } from 'next';
import { MenuProps } from "../../interfaces";

interface CardsPageProps {
  nav: MenuProps[];
}

const CardsPage = (props: CardsPageProps) => {
  const { nav } = props
  return (
    <Layout title="Платежные карты" nav={nav}>
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

CardsPage.getInitialProps = async (ctx: NextPageContext) => {
    let nav
    if(ctx.req) {
        nav = await api.main.getMenu()
    }else {
        if(Object.keys(JSON.parse(localStorage.getItem("menu") || "{}")).length > 0)
        nav = JSON.parse(localStorage.getItem("menu") || "{}")
        else nav = await api.main.getMenu()
    }
    return { nav }
}

export default CardsPage;
