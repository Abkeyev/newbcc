import React from "react";
import { BccTypography, BccTabs, BccTab } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TabsProps, TabProps } from "../interfaces";
import api from '../api/Api'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      innerContainer: {
        padding: 20,
      },
    },
  })
);

const Tabs = () => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const [tabs, setTabs] = React.useState<TabsProps[] | []>([]);
  
  React.useEffect(() => {
    api.main.getTabs(window.location.pathname).then((res: TabsProps[]) => {
      setTabs(res);
    });
  }, [])

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: tabs.length > 0 ? tabs[0].color : "white" }}
    >
      <div className={classes.innerContainer}>
        {
          tabs.length > 0 && (
            <>
            <BccTypography type="h2" block mb="30px">
              {tabs[0].title}
            </BccTypography>
    
            <BccTabs
              value={index}
              onChange={(e: any, i: number) => {
                console.log(e)
                setIndex(i);
              }}
              className={classes.tab}
            >
              {tabs[0].tabs &&
                tabs[0].tabs.map((t: TabProps) => {
                  return <BccTab key={t.id} label={t.title} />;
                })}
            </BccTabs>
            <div
              className={classes.tabs}
              dangerouslySetInnerHTML={{ __html: tabs[0].tabs[index] && tabs[0].tabs[index].content }}
            />
            </>
          )
        }
      </div>
    </div>
  );
};

export default Tabs;