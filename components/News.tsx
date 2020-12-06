import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { BccTypography, BccButton } from "./BccComponents";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import { NewsProps } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      container: {
        backgroundColor: "#fff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "48px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 46,
      },
      item: {
        position: "relative",
        background: "#FFFFFF",
        width: "calc(50% - 12px)",
        height: 200,
        marginBottom: 30,
        border: "1px solid #CCCFD1",
        borderRadius: 8,
        padding: "20px 20px ",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      },
      text: {},
      date: { color: "#B3B6BA", textAlign: "right", marginBottom: 20 },
      moreBtn: {
        padding: "0",
        marginTop: "auto",
        height: "auto",
        textTransform: "none!important",
        lineHeight: "initial",
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
        zIndex: 100,
        transition: ".3s",
      },
      modalClose: {
        position: "relative",
        width: "55%",
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
        height: 450,
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
    [theme.breakpoints.down("md")]: {
      container: {
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "48px",
        boxSizing: "border-box",
      },
      title: {
        fontWeight: "500",
        fontSize: 28,
        color: "#141414",
        marginBottom: 40,
      },
      items: {
        height: 460,
        overflow: "scroll",
        padding: "15px 0",
      },
      item: {
        position: "relative",
        background: "#FFFFFF",
        width: "100%",
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px 20px ",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      text: {},
      date: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "normal",
        color: "#5B5B5B",
        opacity: 0.7,
        marginBottom: 20,
      },
      moreBtn: {
        padding: 0,
        height: "auto",
        lineHeight: "initial",
        marginTop: 20,
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
        zIndex: 100,
        transition: ".3s",
      },
      modalClose: {
        position: "relative",
        width: "90%",
        padding: "20px 0px",
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
        height: 450,
        position: "relative",
        padding: "10px 20px",
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
    [theme.breakpoints.down("xs")]: {
      innerContainer: {
        padding: 20,
        "& > div": {
          marginBottom: 20,
        },
      },
      items: {
        padding: 0,
      },
      title: {
        marginBottom: 0,
      },
    },
    scroll: {
      maxHeight: 400,
      overflowY: "scroll",
    },
    fixedBtnModal: {
      "&:hover": {
        backgroundColor: "inherit",
        color: "#141414",
      },
    },
    allNewsBtn: {
      textDecoration: "underline",
      color: "#27AE60",
      cursor: "pointer",
    },
  })
);

const Icon = withStyles({})((props: any) => (
  <IconButton {...props} disableFocusRipple disableRipple disableTouchRipple />
));

interface NewsPageProps {
  news: NewsProps[];
}

const News = (props: NewsPageProps) => {
  const { news } = props
  const classes = useStyles({});
  const [seleced, setSeleced] = React.useState<NewsProps | null>(null);

  const readMore = (item: any) => {
    document.body.style.overflowY = "hidden";
    setSeleced(item);
  };

  const closeModal = () => {
    document.body.style.overflowY = "scroll";
    setSeleced(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <BccTypography type="h2" className={classes.title}>
              Новости банка
            </BccTypography>
          </Grid>
          <Grid item>
            <BccTypography
              weight="medium"
              type="p1"
              className={classes.allNewsBtn}
            >
              <Link href="/news">Все новости</Link>
            </BccTypography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          direction="row"
          className={classes.items}
        >
          {news && news.length > 0 && (news as NewsProps[]).map((item: NewsProps, index: number) => (
            <Grid item className={classes.item} key={`news${index}`}>
              <BccTypography type="p2" block className={classes.date}>
                {new Date(item.publishDate).toLocaleDateString()}
              </BccTypography>
              <BccTypography type="p2" block className={classes.text}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.contentShort,
                  }}
                />
              </BccTypography>
              <BccButton
                className={classes.moreBtn}
                variant="text"
                color="primary"
                onClick={() => readMore(item)}
              >
                Подробнее
              </BccButton>
            </Grid>
          ))}
        </Grid>

        <Grid
          className={`${classes.fixedModal} ${seleced ? classes.open : ""}`}
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
                  {seleced &&
                    new Date(seleced.publishDate).toLocaleDateString()}
                </BccTypography>
                <div className={classes.scroll}>
                  <BccTypography type="p2" block className={classes.text}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: seleced ? seleced.content : ''
                      }}
                    />
                  </BccTypography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.drpBack} onClick={() => closeModal()}></div>
        </Grid>
      </div>
    </div>
  );
};

export default News;
