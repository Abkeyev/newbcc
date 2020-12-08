import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography
} from "../../components/BccComponents";
import api from '../../api/Api'
import { NextPageContext } from 'next';
import { CallCenterProps, MenuProps } from '../../interfaces';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto 64px",
        padding: "48px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      horizontalTab: {
        "& > div:first-child": {
          width: "calc(30% - 28px)",
          "& > div > div": {
            cursor: "pointer",
            borderRadius: 8,
            padding: 30,
            marginBottom: 30,
            transition: "all .5s ease",
          },
          "& > div > div.active": {
            backgroundColor: "white",
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          },
        },
        "& > div:last-child": {
          width: "calc(70% - 28px)",
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          backgroundColor: "white",
          padding: 30,
        },
      },
      table: {
        color: "#80868C",
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
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "20px 20px 48px",
        paddingTop: 96,
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      horizontalTab: {
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          "& > div": {
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "scroll",
          },
          "& > div > div": {
            cursor: "pointer",
            whiteSpace: "nowrap",
            borderRadius: 8,
            padding: 30,
            marginBottom: 30,
            transition: "all .5s ease",
          },
          "& > div > div.active": {
            backgroundColor: "white",
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          },
        },
        "& > div:last-child": {
          width: "100%",
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          backgroundColor: "white",
          padding: 30,
        },
      },
      table: {
        color: "#80868C",
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
    },
    [theme.breakpoints.down("xs")]: {},
  })
);


interface CallCenterPageProps {
  nav: MenuProps[]
}

const CallCenterPage = (props: CallCenterPageProps) => {
  const { nav } = props
  const classes = useStyles({});
  const [active, setActive] = React.useState(0);
  const [callCenter, setCallCenter] = React.useState<CallCenterProps[] | []>([]);

  React.useEffect(() => {
    api.main.getCallCenter().then((res: CallCenterProps[]) => {
      setCallCenter(res);
    }).catch((err) => console.error(err));
  }, [])

  return (
    <Layout title="Центр обслуживания вызовов" nav={nav}>
      <div className="main-page">
        <div className="container">
          <div className={classes.contents}>
            <BccTypography block type="h2" mb="46px">
              Центр обслуживания вызовов
            </BccTypography>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              className={classes.horizontalTab}
            >
              <Grid item>
                <Grid container direction="column">
                  {(callCenter as CallCenterProps[]).map((c: CallCenterProps, index: number) => {
                    return (
                      <Grid
                        item
                        className={active === index ? "active" : ""}
                        onClick={() => setActive(index)}
                      >
                        {c.title}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item>
                <BccTypography type="p2l" block mb="20px" color="#4D565F">
                  {callCenter.length > 0 && (<div dangerouslySetInnerHTML={{ __html: callCenter[active].content }} />)}
                </BccTypography>
                </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  );
};

CallCenterPage.getInitialProps = async (ctx: NextPageContext) => {
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

export default CallCenterPage;
