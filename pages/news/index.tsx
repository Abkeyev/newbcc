import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { Grid, MenuItem, IconButton } from "@material-ui/core";
import {
  BccTypography,
  BccInput,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableRow,
  BccTableBody,
} from "../../components/BccComponents";
import CloseIcon from "@material-ui/icons/Close";
import api from "../../api/Api";
import { NewsProps } from "../../interfaces";

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
        padding: "24px 48px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
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
          fontSize: 24,
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
        padding: "84px 24px 32px",
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
        padding: "24px 24px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        padding: "0 24px 32px",
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
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const Icon = withStyles({})((props: any) => (
  <IconButton {...props} disableFocusRipple disableRipple disableTouchRipple />
));

const NewsPage = () => {
  const classes = useStyles({});
  const [period, setPeriod] = React.useState("0");
  const [page] = React.useState(0);
  const [news, setNews] = React.useState<NewsProps[] | []>([]);
  const [selected, setSelected] = React.useState<NewsProps | null>(null);

  const readMore = (item: NewsProps) => {
    document.body.style.overflowY = "hidden";
    console.log(item)
    setSelected(item);
  };

  const closeModal = () => {
    document.body.style.overflowY = "scroll";
    setSelected(null);
  };

  React.useEffect(() => {
    api.main.getNews(page).then((res: NewsProps[]) => {
      setNews(res);
    });
  }, []);

  return (
    <>
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <div className={classes.outerContent}>
            <div className={classes.contents}>
              <BccTypography type="h1" block>
                Новости
              </BccTypography>
            </div>
          </div>
          <div className={classes.tabsBranch}>
            <BccTypography type="p1" mr="24px">
              Показать
            </BccTypography>
            <BccInput
              id="period"
              name="period"
              value={period}
              onChange={(e: any) => setPeriod(e.target.value)}
              variant="outlined"
              className={classes.input}
              margin="normal"
              select
            >
              <MenuItem value="0">За все время</MenuItem>
              <MenuItem value="1">За сегодня</MenuItem>
              <MenuItem value="2">За нелелю</MenuItem>
              <MenuItem value="3">За месяц</MenuItem>
            </BccInput>
          </div>
          <div className={classes.outerContent}>
            <div className={classes.mapContainer}>
              <BccTableContainer>
                <BccTable className={classes.table}>
                  <BccTableBody>
                    {
                      news.length > 0 && (news as NewsProps[]).map((n: NewsProps) => (
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography
                              type="p4"
                              color="#B3B6BA"
                              block
                              mt="4px"
                              mb="12px"
                            >
                              {new Date(n.publishDate).toLocaleString().substring(0, 17).replace(/,/, '') }
                            </BccTypography>
                            <BccTypography
                              type="p2"
                              block
                              mb="12px"
                              weight="medium"
                              onClick={() => readMore(n)}
                            >
                              {n.title}
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
    <Grid
    className={`${classes.fixedModal} ${selected ? classes.open : ""}`}
  >
    <Grid className={classes.modalClose}>
      <Icon
        className={classes.fixedBtnModal}
        onClick={() => closeModal()}
      >
        <CloseIcon />
      </Icon>
      <Grid className={`${classes.modalMain} ${classes.notScroll}`}>
        <Grid className={classes.modalTitle}>
          <BccTypography type="p2" block className={classes.date}>
            {selected &&
              new Date(selected.publishDate).toLocaleDateString()}
          </BccTypography>
          <div className={classes.scroll}>
            <BccTypography type="p2" block className={classes.text}>
              <span
                dangerouslySetInnerHTML={{
                  __html: selected ? selected.content : '',
                }}
              />
            </BccTypography>
          </div>
        </Grid>
      </Grid>
    </Grid>
    <div className={classes.drpBack} onClick={() => closeModal()}></div>
  </Grid>
    </>
  );
};
export default NewsPage;
