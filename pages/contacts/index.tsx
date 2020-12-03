import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
} from "../../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto 64px",
        padding: "32px 48px 0",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      press: {
        color: "#4D565F",
        textDecoration: "underline",
      },
      alert: {
        marginBottom: 20,
      },
      document: {
        background: `url(${
          process.env.PUBLIC_URL + "/img/docBg.svg"
        }) no-repeat center top 46px`,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px 120px 64px",
      },
      date: {
        color: "#B3B6BA",
        textAlign: "right",
      },
      docTitle: {
        textAlign: "center",
      },
      mailTo: {
        color: "#1F7042",
      },
      docText: {
        margin: "0 auto",
        width: "90%",
      },
      table: {
        "& th": {
          borderBottom: "none",
        },
        "& th:first-child": {
          paddingLeft: 0,
        },
        "& th:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
      contacts: {
        "& > div": {
          width: "calc(50% - 12px)",
          background: "#FFFFFF",
          padding: 30,
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      contents: {
        position: "relative",
        margin: "0 auto 64px",
        padding: "32px 48px 0",
        paddingTop: 80,
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      press: {
        display: "none",
        color: "#4D565F",
        textDecoration: "underline",
      },
      alert: {
        marginBottom: 20,
      },
      document: {
        background: `url(${
          process.env.PUBLIC_URL + "/img/docBg.svg"
        }) no-repeat center top 46px`,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px 120px 64px",
      },
      date: {
        color: "#B3B6BA",
        textAlign: "right",
      },
      docTitle: {
        textAlign: "center",
      },
      mailTo: {
        color: "#1F7042",
      },
      docText: {
        margin: "0 auto",
        width: "90%",
      },
      table: {
        "& th": {
          borderBottom: "none",
        },
        "& th:first-child": {
          paddingLeft: 0,
        },
        "& th:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
      email: {
        marginBottom: "20px!important",
      },
      contacts: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          background: "#FFFFFF",
          padding: 30,
          marginTop: 12,
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        padding: "20px 20px 0",
      },
    },
  })
);

const ContactsPage = () => {
  const classes = useStyles({});

  return (
    <Layout title="Контакты">
      <div className="main-page">
        <div className="container">
          <div className={classes.contents}>
            <BccTypography block type="p2" mb="46px">
              О банке
            </BccTypography>
            <BccTypography block type="h1" mb="46px">
              Контакты
            </BccTypography>
            <BccTypography block type="h6" mb="8px">
              Ирина Кан
            </BccTypography>
            <BccTypography block type="p2" mb="8px">
              Директор Департамента маркетинга и PR
            </BccTypography>
            <BccTypography block type="p2" mb="30px">
              Email: <BccLink href="">irina.kan@bcc.kz</BccLink>
            </BccTypography>
            <BccTypography block type="h6" mb="8px">
              Андрей Егорин
            </BccTypography>
            <BccTypography block type="p2" mb="8px">
              Руководитель PR-направления Департамента маркетинга и PR АО «Банк
              ЦентрКредит»
            </BccTypography>
            <BccTypography block type="p2" mb="70px" className={classes.email}>
              Email: <BccLink href="">andrey.yegorin@bcc.kz</BccLink>
            </BccTypography>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              className={classes.contacts}
            >
              <Grid item>
                <BccTableContainer>
                  <BccTable className={classes.table}>
                    <BccTableHead>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="h6">
                            Для физических лиц
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell></BccTableCell>
                      </BccTableRow>
                    </BccTableHead>
                    <BccTableBody>
                      <BccTableRow>
                        <BccTableCell>С мобильного телефона</BccTableCell>
                        <BccTableCell>
                          <b>505</b>
                          <br />
                          Бесплатно
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>Для других стран</BccTableCell>
                        <BccTableCell>
                          <b>+7 727 244-30-30</b>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>WhatsApp</BccTableCell>
                        <BccTableCell>
                          <b>+7 701 223-02-28</b>
                        </BccTableCell>
                      </BccTableRow>
                    </BccTableBody>
                  </BccTable>
                </BccTableContainer>
              </Grid>
              <Grid item>
                <BccTableContainer>
                  <BccTable className={classes.table}>
                    <BccTableHead>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="h6">
                            Для юридических лиц
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell></BccTableCell>
                      </BccTableRow>
                    </BccTableHead>
                    <BccTableBody>
                      <BccTableRow>
                        <BccTableCell>С мобильного телефона</BccTableCell>
                        <BccTableCell>
                          <b>505</b>
                          <br />
                          Бесплатно
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>Для других стран</BccTableCell>
                        <BccTableCell>
                          <b>+7 727 244-30-30</b>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>WhatsApp</BccTableCell>
                        <BccTableCell>
                          <b>+7 701 223-02-28</b>
                        </BccTableCell>
                      </BccTableRow>
                    </BccTableBody>
                  </BccTable>
                </BccTableContainer>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactsPage;
