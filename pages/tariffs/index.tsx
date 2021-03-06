import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccTabs,
  BccTab,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableRow,
  BccTableBody,
} from "../../components/BccComponents";
import api from "../../api/Api";
import { TarifsProps, FileProps, fileURL } from "../../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "64px 48px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        alignItems: "center",
        display: "flex",
        padding: "20px 48px 0",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#00A755" },
      mapContainer: {
        padding: "32px 48px 64px",
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      input: {
        minWidth: 360,
        margin: 0,
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
      fixedModal: {
        display: "none",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: ".3s",
      },
      open: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: ".3s",
      },
      modalClose: {
        position: "relative",
        width: "75%",
        padding: "48px 0px",
        background: "white",
        zIndex: 1000,
        borderRadius: 8,
      },
      fixedBtnModal: {
        position: "absolute",
        margin: "auto",
        right: 0,
        zIndex: 1001,
        top: 0,
      },
      modalMain: {
        zIndex: 1000,
        background: "white",
        height: 550,
        position: "relative",
        padding: "20px 40px",
        overflowY: "auto",
        overflowX: "hidden",
      },
      notScroll: {
        overflow: "hidden",
      },
      modalTitle: {
        "& h3": {
          marginTop: 0,
          fontSize: 20,
          color: "#141414",
        },
        "& p": {
          margin: "8px 0 16px 0",
        },
        "& h4": {
          fontSize: 14,
          margin: "0",
        },
      },
      date: { color: "#B3B6BA", textAlign: "right", marginBottom: 20 },
      drpBack: {
        width: "100%",
        height: "100%",
        background: "#00000099",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "84px 20px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        alignItems: "center",
        display: "flex",
        padding: "20px 20px 0",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#00A755" },
      mapContainer: {
        padding: "0 20px 32px",
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      input: {
        minWidth: 0,
        margin: 0,
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
    link: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      '& > img': {
        marginRight: 8
      }
    }
  })
);

interface TarifsPageProps {
  tarifs: any[];
  
}

const TarifsPage = (props: TarifsPageProps) => {
  const { tarifs } = props
  const classes = useStyles({});
  const [index, setIndex] = React.useState<number>(0);

  return (
    <Layout title="Тарифы" >
      <div className="main-page">
        <div className="container">
          <div className={classes.outerContent}>
            <div className={classes.contents}>
              <BccTypography type="h1" block>
                Тарифы
              </BccTypography>
            </div>
          </div>
          <div className={classes.tabsBranch}>
            <BccTabs
              value={index}
              onChange={(e: any, index: number) => {
                console.log(e);
                setIndex(index);
              }}
              className={classes.tab}
            >
              {
                tarifs && tarifs.length > 0 && tarifs[0] && (tarifs[0].tabs as TarifsProps[]).map((n: TarifsProps, i: number) => (
                  <BccTab value={i} label={n.title} />
                ))
              }
            </BccTabs>
          </div>
          <div className={classes.outerContent}>
            <div className={classes.mapContainer}>
              <BccTableContainer>
                <BccTable className={classes.table}>
                  <BccTableBody>
                    {
                      tarifs && tarifs.length > 0 && 
                      tarifs[0] && tarifs[0].tabs && 
                      tarifs[0].tabs[index] && 
                      tarifs[0].tabs[index].files && (tarifs[0].tabs[index].files as FileProps[]).map((n: FileProps) => (
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography
                              type="p4"
                              color="#B3B6BA"
                              block
                              mt="4px"
                              mb="12px"
                            >
                              Обновлено: {new Date(n.updateDate).toLocaleString().substring(0, 17).replace(/,/, '') }
                            </BccTypography>
                            <BccTypography
                              type="p2"
                              block
                              mb="12px"
                              weight="medium"
                              className={classes.link}
                              onClick={() => window.open(`${fileURL}${encodeURIComponent(n.fileName)}`, '_blank')}
                            >
                              <img src="/img/pdf_w.svg" alt="pdf" />{n.title}
                            </BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                      ))
                    }
                  </BccTableBody>
                </BccTable>
              </BccTableContainer>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

TarifsPage.getInitialProps = async () => {
  const news = await api.main.getNews(0)
  const tarifs = await api.main.getTarifs()
  return { news, tarifs }
}

export default TarifsPage;
