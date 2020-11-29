import React from "react";
import Layout from "../../components/Layout";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccChip,
  BccTabs,
  BccTab,
  BccSwitch,
} from "../../components/BccComponents";

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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 48px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        position: "relative",
        margin: "0 auto",
        padding: "32px 48px 64px",
        maxWidth: 1280,
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "80px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 24px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        position: "relative",
        margin: "0 auto",
        padding: "32px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      tabsBranch: {
        flexWrap: "wrap-reverse",
        "& > div:last-child": {
          width: "100%",
          order: 1,
          display: "flex",
          justifyContent: "space-between",
          margin: "12px 0",
        },
      },
    },
  })
);

const BranchesPage = () => {
  const [index, setIndex] = React.useState(0);
  const [switchBtn, setSwitchBtn] = React.useState(true);
  const classes = useStyles({});
  React.useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  return (
    <Layout title="Офисы и банкоматы">
      <div className="main-page">
        <div className="container">
          <div className={classes.outerContent}>
            <div className={classes.contents}>
              <BccTypography type="h2" block mb="24px">
                Офисы и банкоматы
              </BccTypography>
              <BccChip type="contained" color="secondary" mr="16px">
                Физическим лицам
              </BccChip>
              <BccChip type="outlined" color="secondary">
                Бизнесу
              </BccChip>
            </div>
          </div>
          <div className={classes.tabsBranch}>
            <BccTabs
              value={index}
              onChange={(event: any, index: number) => {
                console.log(event);
                setIndex(index);
              }}
              className={classes.tab}
            >
              <BccTab label="Отделения" />
              <BccTab label="Банкоматы" />
              <BccTab label="Терминалы" />
            </BccTabs>
            <div>
              <BccTypography type="p2" mr="12px" className={classes.city}>
                Алматы
              </BccTypography>
              <BccTypography type="p2" className={classes.switch}>
                <span className={!switchBtn ? classes.active : ""}>
                  Списком
                </span>
                <BccSwitch
                  checked={switchBtn}
                  onChange={() => setSwitchBtn(!switchBtn)}
                />
                <span className={switchBtn ? classes.active : ""}>
                  На карте
                </span>
              </BccTypography>
            </div>
          </div>
          <div className={classes.outerContent}>
            <div className={classes.mapContainer}>
              <img src={"/img/map.png"} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BranchesPage;
