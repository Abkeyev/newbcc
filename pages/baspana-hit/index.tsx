import Layout from "../../components/Layout";
import React from "react";
import {
  Slider,
  Benefits,
  Order,
  BaspanaCalculator,
  Tabs,
} from "../../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccCardFull,
  BccBreadcrumbs,
} from "../../components/BccComponents";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        position: "relative",
        backgroundColor: "white",
        padding: "16px 0",
        boxSizing: "border-box",
        marginTop: 16,
        paddingBottom: 16,
        "& > nav": {
          maxWidth: 1280,
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "0 48px",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        display: "none",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const BaspanaHitPage = () => {
  const classes = useStyles({});

  return (
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <div className={classes.container}>
            <BccBreadcrumbs>
              <BccTypography type="p3" td="underline">
                <Link href="/">Частным лицам</Link>
              </BccTypography>
              <BccTypography type="p3" td="underline">
                <Link href="https://www.bcc.kz/fizical/kreditovanie/ipotechnoe-kreditovanie/">Ипотека</Link>
              </BccTypography>
            </BccBreadcrumbs>
          </div>
          <Slider />
          <Benefits />
          <BaspanaCalculator />
          <Order title="Оформить ипотеку" />
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
export default BaspanaHitPage;
