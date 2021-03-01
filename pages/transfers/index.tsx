import React from "react";
import Layout from "../../components/Layout";
import { useTranslation } from 'react-i18next';

const TransfersPage = () => {
  const { t } = useTranslation()
  return (
    <Layout title={t('mortgage')} >
      <div className="main-page">
        <div className="container">
            
        </div>
      </div>
    </Layout>
  );
};

TransfersPage.getInitialProps = async () => {
  return {  }
}

export default TransfersPage;
